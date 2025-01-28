'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CircleCheckBig, Lock } from 'lucide-react'

export function TablePlans() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30%]">Funcionalidades</TableHead>
          <TableHead className="text-center">Plano Free</TableHead>
          <TableHead className="text-center">Plano Pro</TableHead>
          <TableHead className="text-center">Plano Ultra</TableHead>
          <TableHead className="text-center">Plano Plano Enterprise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-bold">Funcionalidades básicas</TableCell>
          <TableCell align="center" className="justify-center text-green-600">
            <CircleCheckBig />
          </TableCell>
          <TableCell align="center" className="justify-center text-green-600">
            <CircleCheckBig />
          </TableCell>
          <TableCell align="center" className="justify-center text-green-600">
            <CircleCheckBig />
          </TableCell>
          <TableCell align="center" className="justify-center text-green-600">
            <CircleCheckBig />
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-bold">Funcionalidades avançadas</TableCell>
          <TableCell
            align="center"
            className="justify-center dark:text-zinc-300"
          >
            <Lock />
          </TableCell>
          <TableCell
            align="center"
            className="justify-center dark:text-zinc-300"
          >
            <Lock />
          </TableCell>
          <TableCell
            align="center"
            className="justify-center dark:text-zinc-300"
          >
            <Lock />
          </TableCell>
          <TableCell
            align="center"
            className="justify-center dark:text-zinc-300"
          >
            <Lock />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
