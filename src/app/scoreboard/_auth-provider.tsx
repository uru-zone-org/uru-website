"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PasswordGate } from "./_components";
import "../../styles/feedback.css";

const AuthContext = createContext<string | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

const ROLE_ROUTES: Record<string, string> = {
  scoreboard: "/scoreboard",
  trainer: "/scoreboard/trainer",
  user: "/scoreboard/user",
};

/** Which paths each role can access */
const ROLE_ACCESS: Record<string, string[]> = {
  scoreboard: ["/scoreboard", "/scoreboard/trainer", "/scoreboard/user", "/scoreboard/dashboard"],
  trainer: ["/scoreboard/trainer"],
  user: ["/scoreboard/user"],
};

function canAccess(role: string, pathname: string): boolean {
  const allowed = ROLE_ACCESS[role];
  if (!allowed) return false;
  return allowed.includes(pathname);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [denied, setDenied] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/feedback/auth", { method: "GET" })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          const r = data.role || "scoreboard";
          setRole(r);

          // Restricted roles: redirect to their only page
          const target = ROLE_ROUTES[r];
          if (r !== "scoreboard" && target && pathname !== target) {
            router.replace(target);
          }
        }
      })
      .catch(() => {})
      .finally(() => setChecked(true));
  }, [pathname, router]);

  // Check access when role or pathname changes
  useEffect(() => {
    if (role && checked) {
      if (!canAccess(role, pathname)) {
        // Redirect restricted users to their allowed page
        router.replace(ROLE_ROUTES[role] || "/scoreboard");
        setDenied(true);
      } else {
        setDenied(false);
      }
    }
  }, [role, pathname, checked, router]);

  if (!checked) {
    return (
      <div className="feedback-gate">
        <div className="gate-card">
          <p className="eyebrow">URUzone Beta</p>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  if (!role) {
    return (
      <PasswordGate
        onAuthenticated={(authenticatedRole: string) => {
          setRole(authenticatedRole);
          const target = ROLE_ROUTES[authenticatedRole] || "/scoreboard";
          router.replace(target);
        }}
      />
    );
  }

  if (denied) {
    return (
      <div className="feedback-gate">
        <div className="gate-card">
          <p className="eyebrow">URUzone Beta</p>
          <h1>Redirecting...</h1>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={role}>
      {children}
    </AuthContext.Provider>
  );
}
