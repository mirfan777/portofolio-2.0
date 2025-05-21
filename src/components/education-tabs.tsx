import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

interface TrainingProps {
  name: string;
  provider: string;
  link_certificate: string;
}

interface EducationTabsProps {
  trainings: TrainingProps[];
  education: any[]; // Menggunakan tipe yang sama dengan DATA.education
  delay?: number;
}

export function EducationTabs({ trainings, education, delay = 0 }: EducationTabsProps) {
  return (
    <Tabs defaultValue="formal" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="formal">Formal Education</TabsTrigger>
        <TabsTrigger value="training">Trainings & Certifications</TabsTrigger>
      </TabsList>
      
      <TabsContent value="formal" className="space-y-4">
        {education.map((edu, id) => (
          <BlurFade
            key={edu.school}
            delay={delay + id * 0.05}
          >
            {/* Reuse existing ResumeCard for formal education */}
            <div className="flex items-start gap-3 rounded-lg border p-3">
              {edu.logoUrl && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
                  <img
                    src={edu.logoUrl}
                    alt={edu.altText || edu.school}
                    className="h-6 w-6 rounded-md object-contain"
                  />
                </div>
              )}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-medium leading-none">
                      {edu.title || edu.school}
                    </div>
                    {edu.href && (
                      <Link
                        href={edu.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                      </Link>
                    )}
                  </div>
                  {edu.period && (
                    <div className="text-sm text-muted-foreground">
                      {edu.period}
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.subtitle || edu.degree}
                </div>
                {edu.description && (
                  <div className="text-sm text-muted-foreground">
                    {edu.description}
                  </div>
                )}
                {edu.badges && edu.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {edu.badges.map((badge: string) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="px-1 py-0 text-[10px]"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </BlurFade>
        ))}
      </TabsContent>
      
      <TabsContent value="training" className="space-y-4">
        {trainings.map((training, id) => (
          <BlurFade
            key={training.name}
            delay={delay + id * 0.05}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="font-medium">{training.name}</div>
                    {training.link_certificate && (
                      <Link
                        href={training.link_certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        <span className="mr-1">Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Provider: {training.provider}
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </TabsContent>
    </Tabs>
  );
}