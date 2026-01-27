import "server-only";
import { cookies } from "next/headers";
import { Exam } from "@/types/exam.type";

export const allExams = async (): Promise<Exam[] | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (!token) return null;

    const resp = await fetch(`${process.env.API_URL}/exams/findExams`, {
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      cache: "no-store",
    });

    if (!resp.ok) {
      console.error(`Erro ao buscar exames: ${resp.status} ${resp.statusText}`);
      return null;
    }

    const data = await resp.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar exames:", error);
    return null;
  }
};
