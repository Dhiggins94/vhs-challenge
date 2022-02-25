/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {  useState } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import daysOfMonth from "./components/daysData.js";
import yearArr from "./components/yearData.js";
import formData from "./components/formData.js";
import blankPic from "./assets/blankPic.png";
import monthsOfTheYear from "./monthsOfTheYear.js";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [month, setMonth] = useState(monthsOfTheYear);
  const [day, setDay] = useState(daysOfMonth);
  const [year, setYear] = useState(yearArr);
  const [bio, setBio] = useState("");
  const [data, setData] = useState(formData);
  const [profilePic, setProfilePic] = useState(blankPic);

  const handleSubmit = (e) => {
    console.log("changes have been submitted");
    e.preventDefault();
    let newFormData = {
      firstName,
      lastName,
      email,
      phone,
      month,
      day,
      year,
      bio,
    };
    setData([...data, newFormData]);
  };

  // filereader plus profile pic imageupload
  const handleProfilePic = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfilePic(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleReset = (e) => {
    e.target.reset();
  };

  const success = () =>
    toast.success("Your changes have saved sucessfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  return (
    <div
      className="page"
      css={css`
        display: flex;
        position: absolute;
        height: 1120px;
        width: 1792px;
        background: #22262d;
      `}
    >
      <form onSubmit={handleReset}>
        <div
          className="container"
          css={css`
            height: 200px;
            width: 200px;
          `}
        >
          <h1
            className="heading-image"
            css={css`
              text-align: center;
              margin-top: 1rem;

              font-weight: bold;
              font-family: Montserrat;
              font-style: normal;
              font-weight: bold;
              font-size: 12px;
              line-height: 16px;
              letter-spacing: 0.857143px;
              text-transform: uppercase;
              color: rgba(240, 248, 255, 0.32);
            `}
          >
            IMAGE
          </h1>

          <div
            className="img-holder"
            css={css`
              margin: auto;
              width: 100px;
              height: 100px;
              border: 1px solid rgba(240, 248, 255, 0.64);
              box-sizing: border-box;
              border-radius: 50px;
              margin-top: 1rem;
            `}
          >
            <img
              src={profilePic}
              alt="blankPic"
              id="img"
              css={css`
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 50px;
                right: 10px;
              `}
            ></img>
            <div> </div>
            <span
              className="material-icons"
              id="picture-icon"
              css={css`
                position: relative;
                bottom: 90px;
                left: 80px;
                background: #2a2e35;
                border-radius: 50px;
                width: 24px;
                height: 24px;
              `}
            >
              &#xe43e;
            </span>
          </div>

          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={handleProfilePic}
            css={css`
              display: none;
            `}
          ></input>
          <div
            className="label"
            css={css`width: 100%; margin-top: 1rem; display: flex, justify-content: center; margin-left: 2rem;`}
          >
            <label
              htmlFor="input"
              className="image-upload"
              css={css`
                margin: auto;
                width: 200px;
                height: 50px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                color: rgba(240, 248, 255, 0.64);
                mix-blend-mode: normal;
                cursor: pointer;
              `}
            >
              UPLOAD
            </label>

            <button
              className="image-remove"
              css={css`
                margin: auto;
                width: 80px;
                height: 50px;
                background-color: Transparent;
                background-repeat: no-repeat;
                border: none;
                overflow: hidden;
                outline: none;
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                color: rgba(240, 248, 255, 0.64);
                mix-blend-mode: normal;
                text-align: center;
                cursor: pointer;
              `}
              onChange={handleReset}
            >
              REMOVE
            </button>
          </div>
        </div>
      </form>

      <form
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          position: absolute;
          width: 489px;
          height: 867px;
          left: 500px;
          top: 150px;
        `}
        onSubmit={handleSubmit}
        onSubmit={handleReset}
      >
        <h3
          css={css`
            position: static;
            width: 106px;
            height: 32px;
            left: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.1px;
            color: #f0f8ff;
            flex: none;
            order: 0;
            flex-grow: 0;
            margin: 32px 0px;
          `}
        >
          Settings
        </h3>

        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          First name*
        </label>
        <br />
        <input
          css={css`
            &:hover {
              border-color: white;
            }

            &:focus {
              border: 1px solid green;
              outline: none;
            }

            &:focus:invalid {
              border: 1px solid red;
              outline: none;
            }

            :required:valid {
              border: 1px solid green;
            }
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 16px;
            position: static;
            width: 488px;
            color: white;
            background: rgba(240, 248, 255, 0.04);
            border: 1px solid rgba(240, 248, 255, 0.32);
            box-sizing: border-box;
            border-radius: 4px;
          `}
          required
          minLength={2}
          type="text"
          value={firstName}
          placeholder={data.map((name) => name.firstName)}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br />
        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          Last name*
        </label>
        <br />
        <input
          css={css`
            &:hover {
              border-color: white;
            }

            &:focus {
              border: 1px solid green;
              outline: none;
            }

            &:focus:invalid {
              border: 1px solid red;
              outline: none;
            }

            :required:valid {
              border: 1px solid green;
            }
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 16px;
            position: static;
            width: 488px;
            color: white;
            background: rgba(240, 248, 255, 0.04);
            border: 1px solid rgba(240, 248, 255, 0.32);
            box-sizing: border-box;
            border-radius: 4px;
          `}
          required
          type="text"
          minLength={2}
          value={lastName}
          placeholder={data.map((name2) => name2.lastName)}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          Email*
        </label>
        <br />
        <input
          css={css`
            &:hover {
              border-color: white;
            }

            &:focus {
              border: 1px solid green;
              outline: none;
            }

            &:focus:invalid {
              border: 1px solid red;
              outline: none;
            }

            :required:valid {
              border: 1px solid green;
            }
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 16px;
            position: static;
            width: 488px;
            color: white;
            background: rgba(240, 248, 255, 0.04);
            border: 1px solid rgba(240, 248, 255, 0.32);
            box-sizing: border-box;
            border-radius: 4px;
          `}
          required
          type="email"
          value={email}
          placeholder={data.map((email) => email.email)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          Phone*
        </label>
        <br />
        <input
          css={css`
            &:hover {
              border-color: white;
            }

            &:focus {
              border: 1px solid green;
              outline: none;
            }

            &:focus:invalid {
              border: 1px solid red;
              outline: none;
            }

            :required:valid {
              border: 1px solid green;
            }
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 16px;
            position: static;
            width: 488px;
            color: white;
            background: rgba(240, 248, 255, 0.04);
            border: 1px solid rgba(240, 248, 255, 0.32);
            box-sizing: border-box;
            border-radius: 4px;
          `}
          required
          type="tel"
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder={data.map((phone) => phone.phone)}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />

        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          Select Date of Birth*
        </label>

        <div
          className="birth-select"
          css={css`
            display: flex;
          `}
        >
          <select
            css={css`
              &:hover {
                border-color: white;
              }

              &:focus {
                border: 1px solid green;
                outline: none;
              }

              &:focus:invalid {
                border: 1px solid red;
                outline: none;
              }

              background: rgba(240, 248, 255, 0.04);
              border: 1px solid rgba(240, 248, 255, 0.32);
              box-sizing: border-box;
              border-radius: 4px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 10px 16px;
              margin-right: 15px;
              color: white;
              width: 176px;
              left: calc(50% - 176px / 2 - 155.5px);
              top: 35.29%;
              bottom: 0%;
            `}
            onChange={(e) => setMonth(e.target.value)}
            required
          >
            <option value={month}> Select a month </option>
            {monthsOfTheYear.map((monthly,index) => (
              <option key={monthly.label} key={index }value={monthly.value}>
                {monthly.label}
              </option>
            ))}
          </select>

          <select
            css={css`
              &:hover {
                border-color: white;
              }

              &:focus {
                border: 1px solid green;
                outline: none;
              }

              &:focus:invalid {
                border: 1px solid red;
                outline: none;
              }

              background: rgba(240, 248, 255, 0.04);
              border: 1px solid rgba(240, 248, 255, 0.32);
              box-sizing: border-box;
              border-radius: 4px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 10px 16px;
              margin-right: 15px;
              color: white;
              width: 130px;
              left: calc(50% - 176px / 2 - 155.5px);
              top: 35.29%;
              bottom: 0%;
            `}
            onChange={(e) => setDay(e.target.value)}
            required
          >
            <option value={day}> Select a Day </option>
            {daysOfMonth.map((daily,index) => (
              <option key={day.label} key={ index}value={daily.value}>
                {daily.label}
              </option>
            ))}
          </select>

          <select
            css={css`
              &:hover {
                border-color: white;
              }

              &:focus {
                border: 1px solid green;
                outline: none;
              }

              &:focus:invalid {
                border: 1px solid red;
                outline: none;
              }

              color: white;
              background: rgba(240, 248, 255, 0.04);
              border: 1px solid rgba(240, 248, 255, 0.32);
              box-sizing: border-box;
              border-radius: 4px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding: 10px 16px;
              width: 139px;
              left: calc(50% - 176px / 2 - 155.5px);
              top: 35.29%;
              bottom: 0%;
            `}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value={year}> Select a Year </option>
            {yearArr.map((yearly, index) => (
              <option key={yearly.label} key={index} value={yearly.value}>
                {yearly.label}
              </option>
            ))}
          </select>
        </div>

        <label
          css={css`
            position: static;
            height: 16px;
            left: 0px;
            right: 0px;
            top: 0px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.857143px;
            text-transform: uppercase;
            color: rgba(240, 248, 255, 0.32);
            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 8px 0px;
          `}
        >
          Bio*
        </label>

        <textarea
          css={css`
            &:hover {
              border-color: white;
            }

            &:focus {
              border: 1px solid green;
              outline: none;
            }

            &:focus:invalid {
              border: 1px solid red;
              outline: none;
            }

            :required:valid {
              border: 1px solid green;
            }
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px 10px;
            flex-grow: 1;
            position: static;
            width: 488px;
            color: white;
            background: rgba(240, 248, 255, 0.04);
            border: 1px solid rgba(240, 248, 255, 0.32);
            box-sizing: border-box;
            border-radius: 1px;
          `}
          value={bio}
          required
          minLength={4}
          placeholder={data.map((bio) => bio.bio)}
          onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <hr
          css={css`
            position: static;
            width: 489px;
            left: calc(50% - 489px / 2);
            top: 0%;
            bottom: 98.67%;

            border: 1px solid rgb(40, 42, 48);

            /* Inside auto layout */

            flex: none;
            order: 0;
            align-self: stretch;
            flex-grow: 0;
            margin: 30px 0px;
          `}
        ></hr>
        <div>
          <button
            onClick={success}
            css={css`
              padding: 10px 24px;
              position: static;
              width: 167px;
              height: 44px;
              left: 0px;
              top: 0px;
              color: white;
              margin: 15px 15px;
              background: linear-gradient(90deg, #27b18a 0%, #317d6c 100%);
              box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
              border-radius: 8px;
            `}
          >
            Submit Changes
          </button>
          <button
            onClick={handleReset}
            css={css`
              padding: 10px 24px;
              position: static;
              width: 167px;
              height: 44px;
              margin: 15px 60px;
              color: white;
              background: rgba(240, 248, 255, 0.32);
              border-radius: 8px;
            `}
          >
            Discard
          </button>
          <ToastContainer
            css={css`
              width: 100vw;
              height: 100vh;
            `}
            position="top-center"
            autoClose={9000}
            transition={Slide}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="colored"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
