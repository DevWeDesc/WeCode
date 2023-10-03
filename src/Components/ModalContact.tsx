import { IInputs } from "@/interfaces/interface";
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
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export function ModalContact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IInputs>();

  const [validationSubmit, setValidationSubmit] = useState(false);

  console.log(validationSubmit);

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };
    emailjs
      .send(
        "service_4llz5kn",
        "template_ehdq0ys",
        templateParams,
        "6Dp1SAvko-GUc3-AQ"
      )
      .then(
        () => {
          toast.success("E-mail Enviado com Sucesso!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setValue("name", "");
          setValue("email", "");
          setValue("message", "");
        },
        () => {
          toast.error("Falha ao enviar E-mail, tente novamente mais tarde!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="w-full text-[16px] xl:mb-2 lg:text-xs pt-2 brightness-50 cursor-pointer hover:brightness-90 transition-all">
          CONTATO
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-[#170f18] border-0">
        <DialogHeader>
          <DialogTitle>Conecte-se com a Inovação!</DialogTitle>
          <DialogDescription>
            Estamos prontos para impulsionar sua empresa com nossas soluções em
            software e nuvem. Entre em contato conosco para começar a
            transformação digital!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="name" className="text-left w-full">
                Nome
              </Label>
              <Input
                {...register("name", { required: true })}
                id="name"
                placeholder="Vinicius Henrique"
              />
              {errors.email && (
                <span className="w-full text-xs text-red-600">
                  O campo Nome é Obrigatório!
                </span>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="name" className="text-left w-full">
                E-mail
              </Label>
              <Input
                {...register("email", { required: true })}
                id="email"
                placeholder="ExemploVinicius@gmail.com"
              />
              {errors.email && (
                <span className="w-full text-xs text-red-600">
                  O campo E-mail é Obrigatório!
                </span>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="username" className="text-left w-full">
                Mensagem
              </Label>
              <Textarea
                {...register("message", { required: true })}
                placeholder="Coloque o Conteúdo da sua mensagem aqui!"
              />
              {errors.message && (
                <span className="w-full text-xs text-red-600">
                  O campo Mensagem é Obrigatório!
                </span>
              )}
            </div>
          </div>
          <DialogFooter className="gap-2">
            <DialogTrigger>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition-all"
              >
                Enviar E-mail
              </Button>
            </DialogTrigger>
            <DialogTrigger>
              <Button
                type="submit"
                className="bg-red-500 w-full hover:bg-red-600 transition-all"
              >
                Cancelar
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
