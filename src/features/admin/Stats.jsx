import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

export default function Stats({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-3 gap-x-8">
      <Stat
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
        color="orange"
      />
      <Stat
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-20 h-20" />}
        color="green"
      />
      <Stat
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        color="primary"
      />
    </div>
  );
}
