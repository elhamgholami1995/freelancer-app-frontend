import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";
import { HiCollection, HiHome } from "react-icons/hi";

export default function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome /> <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="projects">
          <HiCollection /> <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}
