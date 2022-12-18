import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SeacrchInput } from "./components/molecules/SeacrchInput";
import { UserCade } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "kyouhei",
  image: "https://source.unsplash.com/v3-zcCWMjgM",
  email: "123@co.jp",
  phone: "000-000-000",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SeacrchInput />
      <UserCade user={user} />
    </div>
  );
}
