import React, { useEffect, useState } from "react";
import { AlertCircle, Lock, CreditCard, User } from "lucide-react";
import {
  getStripeSubscription,
  getUserDetails,
  resetPassword,
} from "@/services/userService";
import { toast } from "sonner";
import axios from "axios";
import ProfileLayout from "@/ProfileLayout";

interface Message {
  type: "success" | "error";
  content: string;
}

export default function Profile() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPro, setIsPro] = useState<boolean>(false);
  const [subscriptionId, setSubscriptionId] = useState<string>("");
  const [billingCycle, setBillingCycle] = useState<string>("");
  const [nextBilling, setNextBilling] = useState<string>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await getUserDetails();
        setUsername(result.username);
        setEmail(result.email);
        setIsPro(result.isPremium);
        setSubscriptionId(result.subscription);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (!subscriptionId) return;

    const getSubscriptionDetails = async () => {
      try {
        const result = await getStripeSubscription(subscriptionId);
        setBillingCycle(result.billing_cycle);
        setNextBilling(result.next_billing_date);
      } catch (error) {
        console.error("Error fetching subscription details:", error);
      }
    };
    console.log(typeof nextBilling);

    getSubscriptionDetails();
  }, [subscriptionId]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", content: "New passwords do not match" });
      return;
    }

    const isReset = await resetPassword(currentPassword, newPassword);
    console.log(isReset);
    if (isReset) {
      setMessage({ type: "success", content: "Password updated successfully" });
      toast.success("Password reset successfull");
    } else {
      setMessage({ type: "error", content: "Old Password doesn't match" });
      toast.error("Incorrect current password");
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleCancelMembership = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/cancel-subscription`,
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage({
        type: "success",
        content: "Membership cancelled successfully",
      });
      setShowCancelConfirm(false);
    } catch (err) {
      console.log("frotnend error while canceling subscription", err);
    }
  };

  return (
    // <main className="w-full mx-auto flex min-h-screen ">
    //   <Toaster richColors />
    //   <div className="w-72 dark:bg-neutral-950 sticky top-0 h-screen  ">
    //     <a
    //       className="text-lg font-bold text-white px-6 py-4 border-b border-gray-400 flex gap-2 items-center"
    //       href="/home"
    //     >
    //       <Brain className="text-indigo-500" />
    //       BrainlyAI
    //     </a>
    //     <div className="flex flex-col mt-4">
    //       <a
    //         className="text-gray-100 p-4 hover:bg-neutral-900 text-md"
    //         href="#profile"
    //       >
    //         Profile
    //       </a>
    //       <a
    //         className="text-gray-100 p-4 hover:bg-neutral-900 text-md"
    //         href="#security"
    //       >
    //         Security
    //       </a>
    //       <a
    //         className="text-gray-100 p-4 hover:bg-neutral-900 text-md"
    //         href="#subscription"
    //       >
    //         Subscription
    //       </a>
    //     </div>
    //   </div>
    //   <div className="w-full px-6 py-12 space-y-6 dark:bg-neutral-900 bg-gray-100  ">
    //     <div className="max-w-5xl rounded-lg flex flex-col gap-6">
    //       <div
    //         className="flex items-center gap-4 rounded-xl bg-white dark:bg-neutral-950 p-4"
    //         id="profile"
    //       >
    //         <div className="h-16 w-16 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
    //           <User className="h-8 w-8 text-gray-600 dark:text-gray-300" />
    //         </div>
    //         <div>
    //           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    //             {username}
    //           </h1>
    //           <p className="text-gray-600 dark:text-gray-400">{email}</p>
    //         </div>
    //       </div>

    //       {message && (
    //         <div
    //           className={`p-4 rounded-lg mb-6 ${
    //             message.type === "error"
    //               ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
    //               : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
    //           }`}
    //         >
    //           <div className="flex items-center gap-2">
    //             <AlertCircle className="h-5 w-5" />
    //             <p>{message.content}</p>
    //           </div>
    //         </div>
    //       )}

    //       <div
    //         className="rounded-lg shadow-md bg-white dark:bg-neutral-950"
    //         id="security"
    //       >
    //         <div className="p-6 border-b border-gray-200 dark:border-gray-700 ">
    //           <div className="flex items-center gap-2 mb-2">
    //             <Lock className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    //             <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
    //               Change Password
    //             </h2>
    //           </div>
    //           <p className="text-gray-600 dark:text-gray-400 text-sm">
    //             Update your password to keep your account secure
    //           </p>
    //         </div>
    //         <div className="p-6">
    //           <form onSubmit={handlePasswordReset} className="space-y-4">
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    //                 Current Password
    //               </label>
    //               <input
    //                 type="password"
    //                 value={currentPassword}
    //                 onChange={(e) => setCurrentPassword(e.target.value)}
    //                 className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    //                 New Password
    //               </label>
    //               <input
    //                 type="password"
    //                 value={newPassword}
    //                 onChange={(e) => setNewPassword(e.target.value)}
    //                 className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
    //                 Confirm New Password
    //               </label>
    //               <input
    //                 type="password"
    //                 value={confirmPassword}
    //                 onChange={(e) => setConfirmPassword(e.target.value)}
    //                 className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
    //                 required
    //               />
    //             </div>
    //             <button
    //               type="submit"
    //               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
    //             >
    //               Update Password
    //             </button>
    //           </form>
    //         </div>
    //       </div>

    //       {isPro && (
    //         <div
    //           className="  mt-6 rounded-lg shadow-md bg-white dark:bg-neutral-950"
    //           id="subscription"
    //         >
    //           <div className="p-6 border-b border-gray-200 dark:border-gray-700">
    //             <div className="flex items-center gap-2 mb-2">
    //               <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
    //               <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
    //                 BrainlyAI Pro Membership
    //               </h2>
    //             </div>
    //             <p className="text-gray-600 dark:text-gray-400 text-sm">
    //               Manage your subscription
    //             </p>
    //           </div>
    //           <div className="p-6">
    //             <div className="space-y-4">
    //               <div className="flex justify-between items-center">
    //                 <div>
    //                   <p className="font-medium text-gray-900 dark:text-white">
    //                     Current Plan: Pro
    //                   </p>
    //                   <p className="text-sm text-gray-600 dark:text-gray-400">
    //                     Billing cycle:{" "}
    //                     {billingCycle
    //                       ? billingCycle.charAt(0).toUpperCase() +
    //                         billingCycle.slice(1)
    //                       : "Loading..."}
    //                   </p>
    //                   <p className="text-sm text-gray-600 dark:text-gray-400">
    //                     Next billing date:{" "}
    //                     {nextBilling
    //                       ? new Date(nextBilling).toDateString()
    //                       : "Loading ..."}
    //                   </p>
    //                 </div>
    //                 {!showCancelConfirm && (
    //                   <button
    //                     onClick={() => setShowCancelConfirm(true)}
    //                     className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
    //                   >
    //                     Cancel Membership
    //                   </button>
    //                 )}
    //               </div>

    //               {showCancelConfirm && (
    //                 <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
    //                   <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
    //                     Are you sure you want to cancel your Pro membership?
    //                     You'll lose access to all Pro features right now
    //                   </p>
    //                   <div className="flex gap-4">
    //                     <button
    //                       onClick={handleCancelMembership}
    //                       className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
    //                     >
    //                       Yes, Cancel Membership
    //                     </button>
    //                     <button
    //                       onClick={() => setShowCancelConfirm(false)}
    //                       className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
    //                     >
    //                       Keep Membership
    //                     </button>
    //                   </div>
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //           <div className="p-6 border-t border-gray-200 dark:border-gray-700">
    //             <p className="text-sm text-gray-600 dark:text-gray-400">
    //               Need help? Contact support@brainlyai.com
    //             </p>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </main>
    <ProfileLayout>
      <div className="w-full px-6  space-y-6 dark:bg-neutral-900 bg-gray-100  ">
        <div className="max-w-5xl  rounded-lg flex flex-col gap-6">
          <div
            className="flex items-center pt-6 gap-4 rounded-xl bg-white dark:bg-neutral-950 p-4"
            id="profile"
          >
            <div className="h-16 w-16 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {username}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">{email}</p>
            </div>
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                message.type === "error"
                  ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                  : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <p>{message.content}</p>
              </div>
            </div>
          )}

          <div
            className="rounded-lg shadow-md bg-white dark:bg-neutral-950"
            id="security"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 ">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Change Password
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Update your password to keep your account secure
              </p>
            </div>
            <div className="p-6">
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>

          {isPro && (
            <div
              className="  mt-6 rounded-lg shadow-md bg-white dark:bg-neutral-950"
              id="subscription"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    BrainlyAI Pro Membership
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manage your subscription
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Current Plan: Pro
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Billing cycle:{" "}
                        {billingCycle
                          ? billingCycle.charAt(0).toUpperCase() +
                            billingCycle.slice(1)
                          : "Loading..."}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next billing date:{" "}
                        {nextBilling
                          ? new Date(nextBilling).toDateString()
                          : "Loading ..."}
                      </p>
                    </div>
                    {!showCancelConfirm && (
                      <button
                        onClick={() => setShowCancelConfirm(true)}
                        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      >
                        Cancel Membership
                      </button>
                    )}
                  </div>

                  {showCancelConfirm && (
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        Are you sure you want to cancel your Pro membership?
                        You'll lose access to all Pro features right now
                      </p>
                      <div className="flex gap-4">
                        <button
                          onClick={handleCancelMembership}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        >
                          Yes, Cancel Membership
                        </button>
                        <button
                          onClick={() => setShowCancelConfirm(false)}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          Keep Membership
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Need help? Contact support@brainlyai.com
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProfileLayout>
  );
}
