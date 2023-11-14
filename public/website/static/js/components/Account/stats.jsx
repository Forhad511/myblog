import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCustomerStats } from "../../api/Account";

export default function AccountStats({ current, setCurrent }) {
  const [stats, setStats] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getCustomerStats(setStats);
  }, []);

  let all = stats ? stats.total_orders : 0;
  let processing = stats ? stats.processing : 0;
  let finished = stats ? stats.finished : 0;
  let pending = stats ? stats.pending_payment : 0;
  return (
    <div className="accStats">
      <div
        className={
          current === "pending"
            ? "accStatsPart accStatsPartActive"
            : "accStatsPart"
        }
        onClick={() => {
          setCurrent("pending");
          history.push(`/account/orders/1?status=pending`);
        }}
      >
        <span className="accStatNumber">{pending}</span>
        <span className="accStatTitle">Pending</span>
      </div>
      <div
        className={
          current === "processing"
            ? "accStatsPart accStatsPartActive"
            : "accStatsPart"
        }
        onClick={() => {
          setCurrent("processing");
          history.push(`/account/orders/1?status=processing`);
        }}
      >
        <span className="accStatNumber">{processing}</span>
        <span className="accStatTitle">Processing</span>
      </div>
      <div
        className={
          current === "completed"
            ? "accStatsPart accStatsPartActive"
            : "accStatsPart"
        }
        onClick={() => {
          setCurrent("completed");
          history.push(`/account/orders/1?status=completed`);
        }}
      >
        <span className="accStatNumber">{finished}</span>
        <span className="accStatTitle">Finished</span>
      </div>
      <div
        className={
          current === "all" ? "accStatsPart accStatsPartActive" : "accStatsPart"
        }
        onClick={() => {
          setCurrent("all");
          history.push(`/account/orders/1?status=all`);
        }}
      >
        <span className="accStatNumber">{all}</span>
        <span className="accStatTitle">All</span>
      </div>
    </div>
  );
}
