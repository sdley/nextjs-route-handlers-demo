// To prevent caching we dynamic variable which we set to force-dynamic; 
// In that way, the handler will be executed in each execution !
// by default it's set to auto which will try to cache data as much as possible
export const dynamic = "force-dynamic";
export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}