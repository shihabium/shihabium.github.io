"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { defaultHero } from "@/content/defaultHero";
import { getContent, updateContent } from "@/services/contentService";
import SectionCard from "@/components/admin/form/SectionCard";
import TextInput from "@/components/admin/form/TextInput";
import TextareaInput from "@/components/admin/form/TextareaInput";
import FileUpload from "@/components/admin/form/FileUpload";
import SocialInput from "@/components/admin/form/SocialInput";
import SaveButton from "@/components/admin/form/SaveButton";

export default function HeroContentPage() {
    const [hero, setHero] = useState(defaultHero);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadHero();
    }, []);

    async function loadHero() {
    try {
        const result = await getContent("hero");

        if (result?.data) {
        setHero(result.data);
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    }
async function saveHero() {
  try {
    await updateContent("hero", hero);

    alert("Hero Updated Successfully");
  } catch (error) {
    console.error(error);

    alert("Update Failed");
  }
}

if (loading) {
  return (
    <AdminLayout>
      <div className="py-20 text-center text-white">
        Loading...
      </div>
    </AdminLayout>
  );
}
  return (
    <AdminLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-black">
          Hero Section
        </h1>

        <p className="mt-3 text-white/60">
          Edit your homepage hero section.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">

        {/* Form */}

        <SectionCard
          title="Hero Content"
          description="Update your homepage hero section."
        >

          <TextInput
            label="Name"
            value={hero.name}
            placeholder="Shihab"
            onChange={(value) =>
              setHero({
                ...hero,
                name: value,
              })
            }
          />

          <TextInput
            label="Hero Title"
            value={hero.title}
            placeholder="Full Stack Developer"
            onChange={(value) =>
              setHero({
                ...hero,
                title: value,
              })
            }
          />

          <TextareaInput
            label="Description"
            value={hero.description}
            rows={5}
            onChange={(value) =>
              setHero({
                ...hero,
                description: value,
              })
            }
          />

          <TextareaInput
            label="Typewriter Text"
            value={hero.typewriter.join("\n")}
            rows={4}
            placeholder={`Full Stack Developer
Next.js Developer
Shopify Developer
AI Enthusiast`}
            onChange={(value) =>
              setHero({
                ...hero,
                typewriter: value.split("\n"),
              })
            }
          />

          <TextInput
            label="Availability Badge"
            value={hero.badge}
            placeholder="Available For Freelance"
            onChange={(value) =>
              setHero({
                ...hero,
                badge: value,
              })
            }
          />

          <FileUpload
              label="Resume PDF"
              accept=".pdf"
              folder="resume"
              onUpload={(url) =>
                setHero({
                  ...hero,
                  resume: url,
                })
              }
          />

          <FileUpload
            label="Profile Image"
            accept="image/*"
            folder="profile"
            onUpload={(url) =>
              setHero({
                ...hero,
                image: url,
              })
            }
          />

          <SocialInput
            github={hero.github}
            linkedin={hero.linkedin}
            facebook={hero.facebook}
            onGithub={(value) =>
              setHero({
                ...hero,
                github: value,
              })
            }
            onLinkedin={(value) =>
              setHero({
                ...hero,
                linkedin: value,
              })
            }
            onFacebook={(value) =>
              setHero({
                ...hero,
                facebook: value,
              })
            }
          />

        <SaveButton
          onClick={saveHero}
        />

        </SectionCard>

        {/* Preview */}

        <SectionCard
          title="Live Preview"
          description="Preview updates before saving."
        >

          <div className="rounded-3xl border border-white/10 bg-[#050816] p-10">

            <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-green-300">
              {hero.badge}
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">

              Hi,

              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                I'm {hero.name}
              </span>

            </h1>

            <h2 className="mt-8 text-2xl font-semibold text-violet-300">
              {hero.title}
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-white/60">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {hero.typewriter.map((item: string) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </SectionCard>

      </div>
    </AdminLayout>
  );
}