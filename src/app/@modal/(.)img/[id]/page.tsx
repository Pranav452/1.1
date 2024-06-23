import { getImage } from "~/server/queries";


export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId, 10);
  const newImage = await getImage(idAsNumber); // Changed variable name to 'newImage'
  return <div>
    <img src={newImage.url} className="w-96" />
  </div>;
}