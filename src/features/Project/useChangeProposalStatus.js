import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalServic";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.Response?.data?.message),
  });
  return { isUpdating, changeProposalStatus };
}
