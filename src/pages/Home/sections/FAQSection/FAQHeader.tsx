import Cube from "@/icons/Cube";

export default function FAQHeader() {
    return (
        <div className=" border-b border-dashed border-(--default-border-color) border-t flex items-center gap-2 px-3 py-2 text-[#3574F0]">
            <Cube className="size-6" />
            <h2 className="font-medium font-mono">FAQ</h2>
        </div>
    );
}
