import DecorationVector from "../common/decoration-vector";
import { IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import { dummyUser } from "@/lib/dummies";
import { Textarea } from "@mantine/core";
import Link from "next/link";

export default function MyProfile() {
  const isAuthenticated = false;
  const user = dummyUser;

  const renderProfilePicture = () => {
    if (isAuthenticated) {
      return (
        <div className="w-[8rem] h-[8rem] relative rounded-full overflow-hidden">
          <Image alt="" src="/next.svg" fill className="object-cover" />
        </div>
      );
    } else {
      return <IconUserCircle size={128} />;
    }
  };

  return (
    <div className="default-wrapper">
      <DecorationVector />
      <h1 className="header-2rem underline mb-[1rem]">Profilmu</h1>
      <div className="flex justify-center mb-[1rem]">
        {renderProfilePicture()}
      </div>
      <div className="border-2 border-purple-600 bg-white rounded-xl p-[1rem] flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Nama</h2>
          <p className="paragraph">{user.name}</p>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Email</h2>
          <p className="paragraph">{user.email}</p>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Domisili</h2>
          <p className="paragraph">{user.city}</p>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Role</h2>
          <p className="paragraph">{user.role}</p>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Ketertarikan</h2>
          <p className="paragraph">{user.tags.join(", ")}</p>
        </div>
        <div className="flex flex-col gap-[0.25rem]">
          <h2 className="header-600">Deskripsi</h2>
          <Textarea value={user.description} disabled radius="lg" />
        </div>
      </div>
      <Link href="/profile/edit" className="button-600-filled block mt-[1rem]">
        Ubah profil
      </Link>
    </div>
  );
}