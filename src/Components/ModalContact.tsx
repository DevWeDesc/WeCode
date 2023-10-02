import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ModalContact() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="ml-10 text-[12px] pt-2 brightness-50 cursor-pointer hover:brightness-90 transition-all">
          CONTATO
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-primary border-0">
        <DialogHeader>
          <DialogTitle>Conecte-se com a Inovação!</DialogTitle>
          <DialogDescription>
            Estamos prontos para impulsionar sua empresa com nossas soluções em
            software e nuvem. Entre em contato conosco para começar a
            transformação digital!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="name" className="text-left w-full">
              Nome
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="name" className="text-left w-full">
              E-mail
            </Label>
            <Input
              id="email"
              defaultValue="PedroDuarte@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="username" className="text-left w-full">
              Mensagem
            </Label>
            <Textarea placeholder="Coloque o Conteúdo da sua mensagem aqui!" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all"
          >
            Enviar E-mail
          </Button>
          <DialogTrigger>
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition-all"
            >
              Cancelar
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
