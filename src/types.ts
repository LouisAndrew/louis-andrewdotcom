import resume from "../resume.json" with { type: "json" };

type R = typeof resume;
export type Resume = Omit<R, "$schema">;

export type Basics = Resume["basics"];
export type Job = Omit<Resume["work"][number], "cluster">;
export type HeadlineInfo = Omit<Resume["basics"], "profiles">;
export type ContactInfo = Pick<Resume["basics"], "email" | "url">;
export type EducationInfo = Resume["education"][number];
export type SkillInfo = Resume["skills"];
export type LanguageInfo = Resume["languages"];
export type CertificationInfo = Resume["certificates"];
export type NetworkInfo = Resume["basics"]["profiles"];
