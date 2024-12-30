import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string}> }
) {
    if (parseInt((await params).id) > comments.length) {
        redirect("/comments");
    }
    const comment = comments.find(
        async (comment) => comment.id === parseInt((await params).id)
    );
    return Response.json(comment);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string}>}
) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(
        async (comment) => comment.id === parseInt((await params).id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string}>}
) {
    const index = comments.findIndex(
        async (comment) => comment.id === parseInt((await params).id)
    );
    const deletedComment = comments[index]; // we'll return the deleted comment
    comments.splice(index, 1); // number of object to remove is 1
    return Response.json(deletedComment);
}