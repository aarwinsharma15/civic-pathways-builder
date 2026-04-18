import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Save, Upload, Trash2, Plus, Image as ImageIcon } from "lucide-react";

interface SiteContent {
  id: string;
  section_key: string;
  title: string | null;
  content: string | null;
}

interface SiteImage {
  id: string;
  section_key: string;
  title: string | null;
  alt_text: string | null;
  file_url: string;
  display_order: number | null;
}

/* ── Predefined image slots across the site ── */
const IMAGE_SECTIONS = [
  {
    page: "Home",
    slots: [
      { key: "hero_bg", label: "Hero Background" },
      { key: "action_1", label: "In Action – Image 1" },
      { key: "action_2", label: "In Action – Image 2" },
      { key: "action_3", label: "In Action – Image 3" },
      { key: "action_4", label: "In Action – Image 4" },
      { key: "action_5", label: "In Action – Image 5" },
      { key: "action_6", label: "In Action – Image 6" },
    ],
  },
  {
    page: "Hiring",
    slots: [{ key: "hiring_hero", label: "Hiring Banner" }],
  },
];

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState<SiteContent[]>([]);
  const [images, setImages] = useState<SiteImage[]>([]);
  const [activeTab, setActiveTab] = useState<"content" | "images">("images");
  const [newKey, setNewKey] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => { checkAdmin(); }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate("/admin/login"); return; }
    const { data: roles } = await supabase
      .from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
    if (!roles || roles.length === 0) { navigate("/admin/login"); return; }
    setIsAdmin(true);
    setLoading(false);
    fetchContent();
    fetchImages();
  };

  const fetchContent = async () => {
    const { data } = await supabase.from("site_content").select("*").order("section_key");
    if (data) setContents(data);
  };

  const fetchImages = async () => {
    const { data } = await supabase.from("site_images").select("*").order("section_key").order("display_order");
    if (data) setImages(data);
  };

  const saveContent = async (item: SiteContent) => {
    const { error } = await supabase
      .from("site_content")
      .update({ title: item.title, content: item.content })
      .eq("id", item.id);
    toast(error ? { title: "Error", description: error.message, variant: "destructive" } : { title: "Saved!" });
  };

  const addContent = async () => {
    if (!newKey.trim()) return;
    const { error } = await supabase.from("site_content").insert({
      section_key: newKey.trim(),
      title: newTitle.trim() || null,
      content: newContent.trim() || null,
    });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setNewKey(""); setNewTitle(""); setNewContent("");
      fetchContent();
      toast({ title: "Content added!" });
    }
  };

  const deleteContent = async (id: string) => {
    await supabase.from("site_content").delete().eq("id", id);
    fetchContent();
  };

  /* ── Image slot upload / replace ── */
  const uploadToSlot = async (file: File, sectionKey: string) => {
    setUploading(sectionKey);
    const filePath = `${sectionKey}/${Date.now()}-${file.name}`;

    // Delete old images in this slot
    const existing = images.filter(i => i.section_key === sectionKey);
    for (const img of existing) {
      const parts = img.file_url.split("/site-images/");
      if (parts[1]) await supabase.storage.from("site-images").remove([decodeURIComponent(parts[1])]);
      await supabase.from("site_images").delete().eq("id", img.id);
    }

    const { error: uploadError } = await supabase.storage.from("site-images").upload(filePath, file);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(null);
      return;
    }

    const { data: urlData } = supabase.storage.from("site-images").getPublicUrl(filePath);
    const { error } = await supabase.from("site_images").insert({
      section_key: sectionKey,
      title: file.name,
      alt_text: sectionKey.replace(/_/g, " "),
      file_url: urlData.publicUrl,
      display_order: 0,
    });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Image replaced!" });
    }
    await fetchImages();
    setUploading(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!isAdmin) return null;

  const getImageForSlot = (key: string) => images.find(i => i.section_key === key);

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold">YOP Admin Dashboard</h1>
        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-primary-foreground hover:bg-primary-foreground/10">
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </Button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <Button variant={activeTab === "images" ? "default" : "outline"} onClick={() => setActiveTab("images")}>
            Site Images
          </Button>
          <Button variant={activeTab === "content" ? "default" : "outline"} onClick={() => setActiveTab("content")}>
            Text Content
          </Button>
        </div>

        {/* ─── Images Tab ─── */}
        {activeTab === "images" && (
          <div className="space-y-10">
            {IMAGE_SECTIONS.map((section) => (
              <div key={section.page}>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{section.page} Page</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.slots.map((slot) => {
                    const img = getImageForSlot(slot.key);
                    const isUploading = uploading === slot.key;
                    return (
                      <div key={slot.key} className="bg-card border border-border rounded-md overflow-hidden">
                        <div className="aspect-[4/3] bg-muted flex items-center justify-center relative">
                          {img ? (
                            <img src={img.file_url} alt={img.alt_text || slot.label} className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-center text-muted-foreground">
                              <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-40" />
                              <p className="text-xs">No image set</p>
                            </div>
                          )}
                          {isUploading && (
                            <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                              <p className="text-sm font-medium">Uploading…</p>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <p className="text-sm font-semibold text-foreground mb-3">{slot.label}</p>
                          <input
                            id={`upload-${slot.key}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) uploadToSlot(file, slot.key);
                              e.target.value = "";
                            }}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => {
                              const input = document.getElementById(`upload-${slot.key}`) as HTMLInputElement | null;
                              input?.click();
                            }}
                            disabled={isUploading}
                          >
                            <Upload className="h-3 w-3" /> {img ? "Replace" : "Upload"}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── Content Tab ─── */}
        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-md p-6">
              <h2 className="font-heading text-lg font-bold mb-4">Add New Section</h2>
              <div className="grid gap-3">
                <div>
                  <Label>Section Key</Label>
                  <Input placeholder="e.g. hero_title" value={newKey} onChange={e => setNewKey(e.target.value)} />
                </div>
                <div>
                  <Label>Title</Label>
                  <Input placeholder="Section title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea placeholder="Section content..." value={newContent} onChange={e => setNewContent(e.target.value)} rows={3} />
                </div>
                <Button onClick={addContent} size="sm" className="w-fit">
                  <Plus className="h-4 w-4 mr-1" /> Add Section
                </Button>
              </div>
            </div>

            {contents.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-md p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">{item.section_key}</span>
                  <Button variant="ghost" size="sm" className="text-destructive" onClick={() => deleteContent(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid gap-3">
                  <div>
                    <Label>Title</Label>
                    <Input value={item.title || ""} onChange={e => setContents(c => c.map(x => x.id === item.id ? { ...x, title: e.target.value } : x))} />
                  </div>
                  <div>
                    <Label>Content</Label>
                    <Textarea value={item.content || ""} onChange={e => setContents(c => c.map(x => x.id === item.id ? { ...x, content: e.target.value } : x))} rows={4} />
                  </div>
                  <Button size="sm" className="w-fit" onClick={() => saveContent(item)}>
                    <Save className="h-4 w-4 mr-1" /> Save
                  </Button>
                </div>
              </div>
            ))}

            {contents.length === 0 && (
              <p className="text-muted-foreground text-center py-8">No content sections yet. Add one above.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
