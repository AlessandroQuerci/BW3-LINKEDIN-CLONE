import { useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { LuGitCompareArrows } from "react-icons/lu";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZTQ0NTUzMDRhNzAwMTUxNDhjNzUiLCJpYXQiOjE3MzQ1MzQyMTMsImV4cCI6MTczNTc0MzgxM30.Zo-V4M5-basIstgHFjKnRpXgfiqLigX90ro6SpVyFzI", // Inserisci qui il tuo token
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Errore nella risposta dell'API");
        const data = await response.json();

        const NumOfPost = data.slice(0, 25);
        setPosts(NumOfPost);
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-100 ">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="mb-3 position-relative">
            <div className="d-flex">
              <div id="img-btn">
                <img
                  src="https://plus.unsplash.com/premium_photo-1680281937048-735543c5c0f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueXxlbnwwfDF8MHx8fDA%3D"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </div>
              <div id="user-info" className="d-flex flex-column">
                <Link to={`/profile/${post.user && post.user.id ? post.user.id : post.username}`} className="m-0 fs-6 fw-bold d-block text-black">
                  {post.user && post.user.name && post.user.surname ? post.user.name + " " + post.user.surname : post.username}
                </Link>
                <p className="m-0 fs-7">10.000 follower</p>
                <div className="d-flex align-items-center gap-1">
                  <p className="m-0 fs-7">{post.updatedAt || "N. giorni"}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="gray" className="bi bi-globe-americas" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19..." />
                  </svg>
                </div>
              </div>
            </div>
            <button id="follow-btn" className="border-0 bg-transparent text-primary position-absolute fw-bold p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
              </svg>
              Segui
            </button>
            <p>{post.text}</p>
            <div id="bg-img" className="my-1 ">
              <div className="text-center">
                <img src={post.user && post.user.image ? post.image : ""} alt="" className="img-fluid " />
              </div>
            </div>
            <div id="img-actions" className="mt-1 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Button className="p-0 m-0 bg-transparent border-0">
                  <img
                    id="like-btn"
                    src="https://static.licdn.com/aero-v1/sc/h/2uxqgankkcxm505qn812vqyss"
                    alt="like"
                    data-test-reactions-icon-theme="light"
                    data-test-reactions-icon-style="consumption"
                    data-test-reactions-icon-size="medium"
                    height={20}
                    width={20}
                  ></img>
                </Button>
                <Button className="p-0 m-0 bg-transparent border-0">
                  <img
                    id="heart-btn"
                    src="https://static.licdn.com/aero-v1/sc/h/f58e354mjsjpdd67eq51cuh49"
                    alt="love"
                    data-test-reactions-icon-type="EMPATHY"
                    data-test-reactions-icon-theme="light"
                    data-test-reactions-icon-style="consumption"
                    data-test-reactions-icon-size="medium"
                    height={20}
                    width={20}
                  ></img>
                </Button>
                <Button className="p-0 m-0 bg-transparent border-0 ">
                  <img
                    id="congrats-btn"
                    src="https://static.licdn.com/aero-v1/sc/h/cm8d2ytayynyhw5ieaare0tl3"
                    alt="celebrate"
                    data-test-reactions-icon-type="PRAISE"
                    data-test-reactions-icon-theme="light"
                    data-test-reactions-icon-style="consumption"
                    data-test-reactions-icon-size="medium"
                    height={20}
                    width={20}
                  ></img>
                </Button>
                <p className="m-0 ms-1 fs-7 d-inline">77</p>
              </div>
              <div className="d-flex text-secondary">
                <p className="m-0 ms-1 fs-6 ">4 post</p>
                <p className="m-0 mx-1">•</p>
                <p className="m-0 ms-1 fs-6 d-inline">12 diffusioni post</p>
              </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
              <Button className="d-flex align-items-center gap-1 p-0 m-0 bg-transparent border-0 text-secondary fw-bold">
                {["up"].map((direction) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={
                      <div className="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        <p className="m-0 fs-6 d-none d-lg-block">Consiglia</p>
                      </div>
                    }
                  >
                    <div className="d-flex gap-1  rounded-pill bg-white p-1 mb-1">
                      <Dropdown.Item eventKey="1" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon"
                          src="https://static.licdn.com/aero-v1/sc/h/8fz8rainn3wh49ad6ef9gotj1"
                          alt="like"
                          data-test-reactions-icon-type="LIKE"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon reactions-icon__consumption--large data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light"
                          src="https://static.licdn.com/aero-v1/sc/h/1mbfgcprj3z93pjntukfqbr8y"
                          alt="celebrate"
                          data-test-reactions-icon-type="PRAISE"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon reactions-icon__consumption--large data-test-reactions-icon-type-APPRECIATION data-test-reactions-icon-theme-light"
                          src="https://static.licdn.com/aero-v1/sc/h/cv29x2jo14dbflduuli6de6bf"
                          alt="support"
                          data-test-reactions-icon-type="APPRECIATION"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon reactions-icon__consumption--large data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light"
                          src="https://static.licdn.com/aero-v1/sc/h/6f5qp9agugsqw1swegjxj86me"
                          alt="love"
                          data-test-reactions-icon-type="EMPATHY"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon reactions-icon__consumption--large data-test-reactions-icon-type-INTEREST data-test-reactions-icon-theme-light"
                          src="https://static.licdn.com/aero-v1/sc/h/9ry9ng73p660hsehml9i440b2"
                          alt="insightful"
                          data-test-reactions-icon-type="INTEREST"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="6" className="p-0">
                        <img
                          className="reactions-icon reactions-menu__icon reactions-icon__consumption--large data-test-reactions-icon-type-ENTERTAINMENT data-test-reactions-icon-theme-light"
                          src="https://static.licdn.com/aero-v1/sc/h/qye2jwjc8dw20nuv6diudrsi"
                          alt="funny"
                          data-test-reactions-icon-type="ENTERTAINMENT"
                          data-test-reactions-icon-theme="light"
                          data-test-reactions-icon-style="consumption"
                          data-test-reactions-icon-size="large"
                        />
                      </Dropdown.Item>
                    </div>
                  </DropdownButton>
                ))}
              </Button>

              <Button className="d-flex align-items-center gap-1 p-0 m-0 bg-transparent border-0 text-secondary fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <p className="m-0 fs-6 d-none d-lg-block">Commenta</p>
              </Button>

              <Button className="d-flex align-items-center gap-1 p-0 m-0 bg-transparent border-0 text-secondary fw-bold">
                <LuGitCompareArrows />
                <p className="m-0 fs-6 d-none d-lg-block">Diffondi il post</p>
              </Button>

              <Button className="d-flex align-items-center gap-1 p-0 m-0 bg-transparent border-0 text-secondary fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                </svg>
                <p className="m-0 fs-6 d-none d-lg-block">Invia</p>
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default PostList;
