import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Image } from "./components/Image";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";

const roleComponentMap = {
  Banner,
  Button,
  Container,
  Description,
  Footer,
  Header,
  Image,
  Link,
  Logo,
  Nav,
};

const modules = [
  {
    "key": "header-1440-1",
    "role": "Header",
    "title": "header/跟随/1440以上"
  },
  {
    "key": "3810-2",
    "role": "Container",
    "title": "容器 3810"
  },
  {
    "key": "1440px-3",
    "role": "Footer",
    "title": "1440px"
  }
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {modules.map((item) => {
        const Comp = roleComponentMap[item.role as keyof typeof roleComponentMap] || Container;
        return (
          <Comp key={item.key} className="mb-4 p-2">
            {item.title}
          </Comp>
        );
      })}
    </main>
  );
}
