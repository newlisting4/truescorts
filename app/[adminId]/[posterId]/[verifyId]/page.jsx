import Home from "@/app/components/Home";

export default async function Verify({params}) {
  const { adminId, posterId } = params;

  return (
    <div>
      <Home adminId={adminId} posterId={posterId} />
    </div>
  )
}
