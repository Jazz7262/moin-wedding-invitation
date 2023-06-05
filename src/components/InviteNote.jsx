import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. K. Abdul Saleem Nizami</h2>

                <h5 className="address mb-3">
                    Proprietor: <strong>Shabbir Plastics,</strong>
                    <br /> Behind Shahi Jamia Masjid,
                    <br /> Adoni.
                </h5>
                <h5 className="address mb-3">
                    H.No.: 2/129, Bharpet Street,
                    <br /> Near Mehtar Masjid,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 89196 29219, <br />
                    +91 74160 43857, <br />
                    +91 97041 03868.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
