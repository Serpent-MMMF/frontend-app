import { useState, useEffect } from "react";
import { appName } from "@/lib/constants";
import { IconMenu2, IconX, IconUserCircle } from "@tabler/icons-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { useUser } from "@/lib/hooks/use-user";
import { Role } from "@/lib/constants/responses";
import { showSuccess } from "@/lib/utils";
import { useRouter } from "next/router";

const renderAuthButtons = (
  isAuthenticated: boolean,
  handleLogOut: () => void
) => {
  if (!isAuthenticated) {
    return (
      <>
        <Link href="/register" className="button-950-outline">
          Daftar
        </Link>
        <Link href="/login" className="button-950-filled">
          Masuk
        </Link>
      </>
    );
  } else {
    return (
      <button
        className="button-950-outline"
        onClick={() => {
          handleLogOut();
          showSuccess("Sampai jumpa kembali di lain waktu!");
        }}
      >
        Keluar
      </button>
    );
  }
};

const MobileNavbar = ({
  isAuthenticated,
  isMentee,
  handleLogOut,
}: {
  isAuthenticated: boolean;
  isMentee: boolean;
  handleLogOut: () => void;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const renderDrawer = () => {
    return (
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        direction="right"
        size="60%"
        className="p-[1rem]"
      >
        <div className="flex flex-col gap-[1.5rem]">
          <button className="self-end" onClick={() => setIsDrawerOpen(false)}>
            <IconX />
          </button>
          {isAuthenticated && (
            <>
              <Link className="drawer-link" href="/profile">
                Profilku
              </Link>
              {isMentee ? (
                <>
                  <Link className="drawer-link" href="/one-on-one">
                    Riwayat One-on-One
                  </Link>
                  <Link className="drawer-link" href="/group-session/self">
                    Riwayat Sesi Grup
                  </Link>
                </>
              ) : (
                <>
                  <Link className="drawer-link" href="/mentor/one-on-one">
                    Permintaan One-on-One
                  </Link>
                  <Link className="drawer-link" href="/mentor/group-session">
                    Sesi Grupku
                  </Link>
                </>
              )}
              <div className="h-[1px] bg-purple-950" />
            </>
          )}
          <Link className="drawer-link" href="/about-us">
            Tentang Kami
          </Link>
          <div className="h-[1px] bg-purple-950" />
          {renderAuthButtons(isAuthenticated, handleLogOut)}
        </div>
      </Drawer>
    );
  };
  return (
    <div className="p-[1.25rem] lg:hidden">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-outfit font-bold text-[1rem] text-purple-950"
        >
          {appName}
        </Link>
        <button onClick={() => setIsDrawerOpen(true)}>
          <IconMenu2 size={24} color={"#120b53"} />
        </button>
      </div>
      {renderDrawer()}
    </div>
  );
};

const DesktopNavbar = ({
  isAuthenticated,
  isMentee,
  handleLogOut,
}: {
  isAuthenticated: boolean;
  isMentee: boolean;
  handleLogOut: () => void;
}) => {
  return (
    <div className="hidden lg:block">
      <div className="max-w-[1160px] mx-auto flex justify-between items-center p-[1.25rem]">
        <div className="flex gap-[1rem]">
          <Link
            href="/"
            className="font-outfit font-bold text-[1rem] text-purple-950"
          >
            {appName}
          </Link>
          <Link className="text-right font-jakarta text-purple-950" href="/about-us">
            Tentang Kami
          </Link>
        </div>
        <div className="flex gap-[1rem]">
          {renderAuthButtons(isAuthenticated, handleLogOut)}
          {isAuthenticated && (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <button className="flex gap-[0.5rem] justify-end items-center">
                  <IconUserCircle />
                  <p className="paragraph">Profilku</p>
                </button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  <Link href="/profile" className="paragraph block">
                    Profilku
                  </Link>
                </Menu.Item>
                {isMentee ? (
                  <>
                    <Menu.Item>
                      <Link href="/one-on-one" className="paragraph block">
                        Riwayat One-on-One
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/group-session/self"
                        className="paragraph block"
                      >
                        Riwayat Sesi Grup
                      </Link>
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Item>
                      <Link
                        href="/mentor/one-on-one"
                        className="paragraph block"
                      >
                        Permintaan One-on-One
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        href="/mentor/group-session"
                        className="paragraph block"
                      >
                        Sesi Grupku
                      </Link>
                    </Menu.Item>
                  </>
                )}
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const { user, setUser } = useUser();

  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(undefined);
    router.push("/login");
  };

  const isAuthenticated = !!user;
  const isMentee = isAuthenticated && user?.role === Role.MENTEE;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-2 border-purple-50 bg-white">
      <MobileNavbar
        isAuthenticated={isAuthenticated}
        isMentee={isMentee}
        handleLogOut={handleLogOut}
      />
      <DesktopNavbar
        isAuthenticated={isAuthenticated}
        isMentee={isMentee}
        handleLogOut={handleLogOut}
      />
    </nav>
  );
}
