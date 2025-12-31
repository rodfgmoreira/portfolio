import Image from "next/image";

export function ProjectCard() {
  return (
    <div>
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Thumbnail de projeto"
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h3>
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
        </h3>
      </div>
    </div>
  )
}