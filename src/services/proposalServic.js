import http from "./httpService";

export function changeProposalStatusApi({ id, data }) {
  return http.get(`/proposal/${id}`, data).then(({ data }) => data.data);
}
