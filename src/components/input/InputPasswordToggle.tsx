// import { useState } from "react";
// import { IconEyeClose, IconEyeOpen } from "../icons";
// import Input from "./Input";

// interface InputPasswordToggleProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {
//   placeholder?: string;
// }
// // const InputPasswordToggle = ({ control }) => {
// const InputPasswordToggle = ({
//   placeholder = "Enter your password",
// }: InputPasswordToggleProps) => {
//   const [togglePassword, setTogglePassword] = useState(false);
//   // if (!control) {
//   //   return null;
//   // }
//   return (
//     <>
//       <Input
//         type={togglePassword ? "text" : "password"}
//         name="password"
//         id="password"
//         placeholder={placeholder}
//         // control={control}
//       >
//         {!togglePassword ? (
//           <IconEyeClose onClick={() => setTogglePassword(true)} />
//         ) : (
//           <IconEyeOpen onClick={() => setTogglePassword(false)} />
//         )}
//       </Input>
//     </>
//   );
// };

// export default InputPasswordToggle;
