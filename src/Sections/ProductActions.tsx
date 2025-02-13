import Button from "@/Components/Button";

export default function ProductActions() {
  return (
    <div className="flex justify-center gap-4 mt-6 mb-4">
      <Button
        text="Where to Buy"
        className="bg-[#B02B29] text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-[#8A2220] hover:shadow-lg"
      />
      <Button
        text="Learn More"
        className="bg-black text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg"
      />
    </div>
  );
}
