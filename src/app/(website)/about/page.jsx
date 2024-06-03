import Header from "@/components/header/header";
import { Button } from "antd";
import { ForwardOutlined } from "@ant-design/icons";
import Footer from "../_components/Footer";

export default function About() {
  return (
    <div>
      this is about page
      <Header />
      <Button></Button>
      <ForwardOutlined />
      <Footer />
    </div>
  );
}
