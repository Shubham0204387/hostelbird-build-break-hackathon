import { useState } from "react";

const rooms = [
  {
    id: 1,
    type: "6 Bed Mixed Dorm",
    description: "Shared dorm with individual beds",
    guests: "1 guest",
    price: "₹499",
    available: false,
  },
  {
    id: 2,
    type: "4 Bed Mixed Dorm",
    description: "Compact shared room for travelers",
    guests: "1 guest",
    price: "₹599",
    available: false,
  },
  {
    id: 3,
    type: "Private Room",
    description: "Private stay for a more comfortable trip",
    guests: "1–2 guests",
    price: "₹1,299",
    available: false,
  },
];

const images = [
  "/social-monkey.jpg",
  "/social-monkey-2.jpg",
  "/social-monkey-3.jpg",
  "/social-monkey-4.jpg",
];

function RatingCard() {
  return (
    <section className="rating-card">
      <div className="rating-score">
        <span className="rating-star">★</span>
        <strong>9.6</strong>
        <span>/10</span>
      </div>

      <div>
        <p className="rating-title">Guest rating</p>
        <p className="rating-subtitle">Rating transparency</p>
      </div>

      <div className="rating-divider" />

      <div className="rating-status">
        <span className="status-dot" />
        <div>
          <strong>Source not clearly shown</strong>
          <p>No HostelBird reviews yet</p>
        </div>
      </div>
    </section>
  );
}

export default function PropertyPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [message, setMessage] = useState(null);

  const handleChangeDates = () => {
    setMessage({
      type: "blue",
      title: "Choose new dates",
      text: "Update your check-in and check-out dates to find newly available rooms.",
    });
  };

  const handleExplore = () => {
    setMessage({
      type: "green",
      title: "Find another stay",
      text: "Explore nearby hostels that may have availability for your selected dates.",
    });
  };

  const handleRoomAlternative = (roomId) => {
    setSelectedRoomId(roomId);
  };

  return (
    <div className="property-page">
      {/* NAVBAR */}
      <header className="site-nav">
        <div className="nav-inner">
          <div className="brand">
            <span className="brand-mark">B</span>
            <span className="brand-name">HostelBird</span>
          </div>

          <nav className="desktop-nav">
            <a href="#rooms">Rooms</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <div className="secure-booking">
            <span className="secure-dot" />
            Secure booking
          </div>
        </div>
      </header>

      <main>
        {/* BREADCRUMB */}
        <div className="container breadcrumb">
          <span>Hostels</span>
          <span>/</span>
          <span>Bir</span>
          <span>/</span>
          <strong>Social Monkey</strong>
        </div>

        {/* PROPERTY INTRO */}
        <section className="container property-intro">
          <div>
            <p className="property-kicker">BIR • HIMACHAL PRADESH</p>

            <h1>Social Monkey</h1>

            <div className="property-meta">
              <span>📍 Bir, Himachal Pradesh</span>
              <span className="meta-separator">•</span>
              <span className="mini-rating">
                ★ <strong>9.6</strong>/10
              </span>
            </div>
          </div>

          <button
            className="share-button"
            onClick={() =>
              setMessage({
                type: "blue",
                title: "Share this stay",
                text: "The sharing action would open from here in the production experience.",
              })
            }
          >
            <span>↗</span>
            Share
          </button>
        </section>

        {/* HERO */}
        <section className="container hero-section">
          <div className="gallery">
            <div className="main-image-wrap">
              <img
                src={images[selectedImage]}
                alt="Social Monkey hostel"
                className="main-image"
              />

              <div className="photo-count">
                <span>▧</span>
                {images.length} photos
              </div>

              <div className="image-gradient" />
            </div>

            <div className="thumbnail-row">
              {images.map((image, index) => (
                <button
                  key={image}
                  className={`thumbnail ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`Hostel view ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* BOOKING PANEL */}
          <aside className="booking-card">
            <div className="booking-card-top">
              <div>
                <p className="booking-eyebrow">YOUR STAY</p>
                <h2>Booking summary</h2>
              </div>

              <span className="booking-lock">⌁</span>
            </div>

            <div className="stay-grid">
              <div className="stay-field">
                <span>CHECK-IN</span>
                <strong>07 OCT</strong>
                <small>Wednesday</small>
              </div>

              <div className="stay-field">
                <span>CHECK-OUT</span>
                <strong>08 OCT</strong>
                <small>Thursday</small>
              </div>
            </div>

            <div className="guest-row">
              <div>
                <span>GUESTS</span>
                <strong>1 Guest</strong>
              </div>

              <span className="guest-icon">♙</span>
            </div>

            <div className="availability-box">
              <div className="availability-icon">!</div>
              <div>
                <strong>No rooms available</strong>
                <p>
                  This property doesn't have availability for your selected
                  dates.
                </p>
              </div>
            </div>

            <div className="total-row">
              <span>Total</span>
              <strong>₹0</strong>
            </div>

            <button className="primary-button" onClick={handleChangeDates}>
              Change dates
              <span>→</span>
            </button>

            <button className="secondary-button" onClick={handleExplore}>
              Explore other hostels
              <span>↗</span>
            </button>

            {message && (
              <div className={`booking-message ${message.type}`}>
                <div className="message-icon">
                  {message.type === "green" ? "✓" : "i"}
                </div>

                <div>
                  <strong>{message.title}</strong>
                  <p>{message.text}</p>
                </div>
              </div>
            )}
          </aside>
        </section>

        {/* QUICK INFO */}
        <section className="container quick-info">
          <div className="info-item">
            <span className="info-icon">◉</span>
            <div>
              <strong>Social atmosphere</strong>
              <p>Designed around shared travel experiences.</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">⌂</span>
            <div>
              <strong>Stay options</strong>
              <p>Multiple room types can be compared.</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">↗</span>
            <div>
              <strong>Explore alternatives</strong>
              <p>Don't get stuck when one stay is unavailable.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="container content-section" id="about">
          <div className="section-label">THE STAY</div>

          <div className="about-grid">
            <div>
              <h2>A better way to choose your stay.</h2>
            </div>

            <div>
              <p>
                Social Monkey is presented here as a traveler-focused property
                page. The experience keeps the important booking information
                visible while making unavailable options easier to recover
                from.
              </p>

              <p>
                When a selected stay cannot be booked, travelers should have a
                clear next action instead of reaching a dead end.
              </p>
            </div>
          </div>
        </section>

        {/* RATING */}
        <section className="container" id="reviews">
          <RatingCard />
        </section>

        {/* ROOMS */}
        <section className="container rooms-section" id="rooms">
          <div className="section-heading">
            <div>
              <p className="section-label">ROOMS & RATES</p>
              <h2>Choose your room</h2>
            </div>

            <span className="room-status">
              {rooms.length} room types
            </span>
          </div>

          <div className="rooms-list">
            {rooms.map((room) => (
              <article className="room-card" key={room.id}>
                <div className="room-icon">▦</div>

                <div className="room-details">
                  <div className="room-title-row">
                    <h3>{room.type}</h3>
                    {!room.available && (
                      <span className="sold-out-badge">SOLD OUT</span>
                    )}
                  </div>

                  <p>{room.description}</p>

                  <div className="room-meta">
                    <span>♙ {room.guests}</span>
                    <span>•</span>
                    <span>Selected dates</span>
                  </div>
                </div>

                <div className="room-price">
                  <span>from</span>
                  <strong>{room.price}</strong>
                  <small>per night</small>

                  <button
                    className="room-action"
                    onClick={() => handleRoomAlternative(room.id)}
                  >
                    Find alternatives
                    <span>→</span>
                  </button>
                </div>

                {selectedRoomId === room.id && (
                  <div className="room-alternative">
                    <div className="alternative-icon">↗</div>

                    <div>
                      <strong>This room isn't available right now.</strong>
                      <p>
                        Try another room type, change your dates, or explore
                        nearby hostels.
                      </p>
                    </div>

                    <button onClick={handleExplore}>
                      Explore options
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container final-cta">
          <div>
            <span className="cta-kicker">DON'T HIT A DEAD END</span>
            <h2>There's always another way to continue.</h2>
            <p>
              If your first choice isn't available, give travelers a clear
              path forward.
            </p>
          </div>

          <button className="primary-button" onClick={handleExplore}>
            Explore other hostels
            <span>→</span>
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand">
            <span className="brand-mark">B</span>
            <span className="brand-name">HostelBird</span>
          </div>

          <p>Better booking. Clearer choices.</p>
        </div>
      </footer>
    </div>
  );
}