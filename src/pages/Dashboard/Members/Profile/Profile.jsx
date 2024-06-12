import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";
import { members } from "@/constants/data";
import { Link, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getMemberById = (memberId) => {
    return members.find((data) => data.id == memberId);
  };
  const profile = getMemberById(id);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/dashboard/members">Members</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{profile?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-grey-50 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={profile?.photo}
            alt={profile?.name}
          />
          <h1 className="text-3xl font-semibold text-gray-800">
            {profile?.name}
          </h1>
          <p className="text-gray-600">{profile?.bio}</p>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h2>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href={`mailto:${profile?.email}`}
                className="text-primary hover:underline"
              >
                {profile?.email}
              </a>
            </p>
            <p className="text-gray-600">Phone: {profile?.phone}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Additional Information
            </h2>
            <p className="text-gray-600">Hometown: {profile?.hometown}</p>
            <p className="text-gray-600">Joined Date: {profile?.joinedDate}</p>
          </div>
          <div className="text-center">
            <Button onClick={() => navigate("edit")}>Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
