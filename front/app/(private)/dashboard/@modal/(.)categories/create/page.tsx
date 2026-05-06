import { CategoryForm } from "@/components/forms/category-form";
import { Modal } from "@/components/modal/modal";

export default function Create() {
    return (
        <Modal title="Crear categoria">
            <CategoryForm />
        </Modal>
    )
}