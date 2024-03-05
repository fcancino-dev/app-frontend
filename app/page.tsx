import EmailForm from "@/components/email-form";
import ItemList from "@/components/item-list";
import Image from "next/image";
import { Button} from "@/components/ui/button";
import Link from "next/link";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-600 grid place-content-center">
      <article className="grid grid-cols-1 items-center md:space-x-6 md:grid-cols-2 md:max-w-[800px] md:min-h-[500px] bg-white md:p-8 rounded-[40px] ">
        <section className=" space-y-6 md:p-8 p-8 py-14 order-last">
          <h1 className=" text-5xl font-bold">Stay update!</h1>
          <p className="md:text-sm text-xl">Join 60.000+ product managers receiving monthly updates on:</p>
          <ul className=" space-y-3 md:text-sm text-xl">
            <ItemList>Lorem ipsum dolor sit amet.</ItemList> 
            <ItemList>Lorem ipsum dolor sit amet.</ItemList> 
            <ItemList>Lorem ipsum dolor sit amet.</ItemList> 
          </ul>
          <EmailForm />
        </section>
        <section className="md:order-last">
          <Image
            className="hidden md:block" 
            src="/main-image.svg"
            width={700}
            height={500}
            alt="Main Image"
          />
          <Image 
            className="md:hidden"
            src="/main-image-mobile.svg"
            width={700}
            height={500}
            alt="Main Image"
          />
        </section>
      </article>
      <Button className="text-white">
        <Link href="/about">About</Link>
      </Button>
    </div>
    
  )
}

export default HomePage