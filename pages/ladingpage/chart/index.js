import React from 'react'
import Chart from '../../../components/ladingpages/chart/chartUser'
import Layout from '../../../components/ladingpages/utils/layout'
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/router'
import Swal from "sweetalert2"

export default function Index() {
  const { data: session, status } = useSession();
  const router = useRouter()
  if (session) {
  return (
    <div>
        <Layout>
            <Chart />
        </Layout>
    </div>
  )
} else {
  Swal.fire({
    icon: "error",
    title: "Hayo Login Dulu",
    text: "You must login first!",
  });
  signIn();
}
}
