import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServicesCardProps {
  backgroundImage: any;
  title: any;
  subtitle: any;
  href?: any;
}

const ServicesCard = ({ backgroundImage, title, subtitle, href }: ServicesCardProps) => {
  return (
    <motion.div
      className="relative h-64 w-full overflow-hidden rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={{ filter: "blur(4px)" }}
        whileHover={{ filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center text-white"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="mb-2 text-2xl font-bold"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-200"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {href && (
        <Link href={href} className="absolute inset-0">
          <span className="sr-only">View {title}</span>
        </Link>
      )}
    </motion.div>
  );
};

export default ServicesCard