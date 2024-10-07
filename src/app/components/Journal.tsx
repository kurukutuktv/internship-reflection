"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/JournalPage.module.css";

const imageData = [
  { src: "/images/Screenshot_1.png", caption: "Landing page" },
  { src: "/images/Screenshot_2.png", caption: "Sign up" },
  { src: "/images/Screenshot_3.png", caption: "Sign in" },
  { src: "/images/Screenshot_4.png", caption: "Tumblers view for non-logged in users" },
  { src: "/images/Screenshot_5.png", caption: "Tumblers view for logged in users" },
  { src: "/images/Screenshot_6.png", caption: "Customize tumbler page" },
  { src: "/images/Screenshot_7.png", caption: "Checkout using COD" },
  { src: "/images/Screenshot_8.png", caption: "Checkout using Card" },
  { src: "/images/Screenshot_9.png", caption: "Orders Page" },
  { src: "/images/Screenshot_10.png", caption: "VIew Invoice for an Order" },
  { src: "/images/Screenshot_11.png", caption: "Rename Tumbler in Cart" },
  { src: "/images/Screenshot_12.png", caption: "Tumbler Visibility in Cart" },
  { src: "/images/Screenshot_13.png", caption: "User Transactions Notification" },
  { src: "/images/Screenshot_14.png", caption: "Account Setting: Edit Profile" },
  { src: "/images/Screenshot_15.png", caption: "Account Setting: Change Password" },
  { src: "/images/Screenshot_16.png", caption: "Account Setting: Manage Delivery Addresses" },
  { src: "/images/Screenshot_17.png", caption: "Account Setting: Add Delivery Addresses" },
  { src: "/images/Screenshot_18.png", caption: "Admin: Analytics Dashboard Part 1" },
  { src: "/images/Screenshot_19.png", caption: "Admin: Analytics Dashboard Part 2" },
  { src: "/images/Screenshot_20.png", caption: "Admin: Client Orders" },
  { src: "/images/Screenshot_21.png", caption: "Admin: Client Orders Status" },
  { src: "/images/Screenshot_22.png", caption: "Admin: Client Orders Export to CSV" },
  { src: "/images/Screenshot_23.png", caption: "Admin: Manage Colors" },
  { src: "/images/Screenshot_24.png", caption: "Admin: Manage Materials" },
  { src: "/images/Screenshot_25.png", caption: "Admin: Manage Lid Types" },
  { src: "/images/Screenshot_26.png", caption: "Admin: Manage Tumbler Sizes" },
  { src: "/images/Screenshot_27.png", caption: "Admin: User Transactions" },
  { src: "/images/Screenshot_28.png", caption: "Laravel API Routes" },
  { src: "/images/Screenshot_29.png", caption: "Checking API with Postman" },
  { src: "/images/Screenshot_30.png", caption: "Next.js Codes" },
];

export default function JournalPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(imageData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = imageData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 space-y-4">
        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105">
          <div className="card-body">
            <strong className="text-accent"><h2 className="text-2xl font-bold">OJT Journal</h2></strong>
            <p>
              During my internship at Fligno Software Philippines Inc., I was
              fortunate to work on a real-world project called{" "}
              <strong className="text-secondary">Tumblify</strong>. Tumblify is an innovative e-commerce
              platform that empowers users to customize their own tumblers,
              offering a unique and personalized shopping experience. This
              project allowed me to apply the theoretical knowledge I gained
              throughout my academic journey while honing my skills in a
              professional setting.
            </p>
            <p>
              Through hands-on involvement in this project, I was exposed to the
              entire software development lifecycle, from initial planning and
              design to implementation and testing. I had the chance to
              collaborate with a talented team, contributing to key aspects such
              as back-end development, user interface enhancements, and the
              integration of customization features. This experience not only
              deepened my technical understanding but also improved my
              problem-solving abilities in a fast-paced, deadline-driven
              environment.
            </p>
            <div>
              <strong className="text-secondary">Photos and Screenshots</strong>
            </div>
            {/* Images displayed in a grid format */}
            <div className={styles.grid}>
              {currentItems.map((image, index) => (
                <div key={index} className={styles.gridItem}>
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={300} // Adjust width as needed
                    height={200} // Adjust height as needed
                    className="rounded-lg object-cover"
                  />
                  <div className={styles.caption}>{image.caption}</div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
              <button
                className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<"}
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className={`btn ${
                  currentPage === totalPages ? "btn-disabled" : ""
                }`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
