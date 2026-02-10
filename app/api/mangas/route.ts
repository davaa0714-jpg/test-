import sql from "@/db"

export async function GET() {
    const mangas = await sql`SELECT * FROM mangas`
    return new Response(JSON.stringify(mangas)) 

}

