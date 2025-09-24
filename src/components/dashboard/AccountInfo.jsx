import { User, Edit } from "lucide-react";

export default function AccountInfo({ user }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Account Information</h3>
        <button className="text-sm text-cyan-400 hover:underline flex items-center gap-1">
            <Edit size={14} />
            <span>Edit</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <User className="text-gray-400" size={32} />
        </div>
        <div>
            <p className="text-xl font-bold text-white">{user.name || "User"}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700/50 pt-4 space-y-2">
        <div className="flex justify-between text-sm">
            <span className="text-gray-400">Account Status:</span>
            <span className="text-green-400 font-medium">Verified</span>
        </div>
        <div className="flex justify-between text-sm">
            <span className="text-gray-400">Member Since:</span>
            <span className="text-gray-300">Jan 2024</span>
        </div>
      </div>
    </div>
  );
}
