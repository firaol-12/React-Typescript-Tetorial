import * as Dialog from "@radix-ui/react-dialog";

export default function Headless(){
    return(

        <Dialog.Root>

            <Dialog.Trigger>

                Open

            </Dialog.Trigger>

            <Dialog.Content>

                Hello

            </Dialog.Content>

        </Dialog.Root>

    )
}