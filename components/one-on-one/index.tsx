import DecorationVector from "../common/decoration-vector";
import { dummyMyBookings } from "@/lib/dummies";
import { Badge, Textarea } from "@mantine/core";
import { IconUserCircle, IconCalendar, IconBrowser } from "@tabler/icons-react";
import { getBadgeColor, formatDateToIndonesianLocale } from "@/lib/utils";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { labelStyle } from "@/lib/constants/styles";
import ReactStars from "react-stars";

export default function MyBookings() {
  const bookings = dummyMyBookings;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="default-wrapper">
      <DecorationVector />
      <h1 className="header-2rem underline">Riwayat One-on-One</h1>
      {bookings.length > 0 ? (
        <div className="flex flex-col gap-[1rem]">
          {bookings.map((booking) => {
            return (
              <div
                key={booking.id}
                className="bg-white p-[1rem] rounded-xl drop-shadow-xl flex flex-col gap-[0.5rem] items-start"
              >
                <Badge color={getBadgeColor(booking.approvalStatus)}>
                  {booking.approvalStatus}
                </Badge>
                <div className="flex flex-row items-center gap-[0.5rem]">
                  <IconUserCircle />
                  <p className="paragraph">{booking.mentorName}</p>
                </div>
                <div className="flex flex-row items-center gap-[0.5rem]">
                  <IconCalendar />
                  <p className="paragraph">
                    {formatDateToIndonesianLocale(booking.date)}
                  </p>
                </div>
                {booking.approvalStatus === "APPROVED" && (
                  <>
                    <div className="flex flex-row items-center gap-[0.5rem]">
                      <IconBrowser />
                      <Link href={booking.meetingUrl} className="paragraph">
                        {booking.meetingUrl}
                      </Link>
                    </div>
                    {!booking.review ? (
                      <button
                        className="button-600-filled"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Berikan review
                      </button>
                    ) : (
                      <p className="paragraph">
                        Anda sudah memberikan review untuk sesi ini.
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="paragraph">
          Anda belum pernah mengirimkan permintaan one-on-one.
        </p>
      )}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        center
        showCloseIcon={false}
        classNames={{ modal: "rounded-xl" }}
      >
        <div className="flex flex-col justify-center gap-[1rem] p-[1rem] max-w-[293px]">
          <h1 className="subheader">Beri penilaian</h1>
          <p className="paragraph">
            Isi formulir di bawah ini untuk memberikan penilaian!
          </p>
          <Textarea
            label="Review untuk mentor"
            placeholder="Materinya sangat bermanfaat!"
            withAsterisk
            styles={{ ...labelStyle }}
            radius="lg"
          />
          <div className="flex flex-col">
            <p className="paragraph font-semibold text-[0.8rem]">
              Penilaian <span className="text-red-500">*</span>
            </p>
            <ReactStars count={5} size={32} />
          </div>
          <button className="button-600-filled">Proses penilaian</button>
        </div>
      </Modal>
    </div>
  );
}