import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Building2, Contact, Lock, ShieldCheck, UserCheck } from 'lucide-react'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-10 md:px-8">
      <Card className="border-blue-200">
        <CardHeader className="gap-3">
          <Badge className="bg-blue-700 text-blue-50">DBComm Privacy Policy</Badge>
          <CardTitle className="text-3xl text-blue-700 md:text-4xl">
            Privacy Policy for DBComm
          </CardTitle>
          <CardDescription className="text-base">
            Effective date: April 17, 2026
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 text-left text-slate-700">
          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <Building2 className="h-5 w-5" />
              <span>1. About this application</span>
            </h2>
            <p>
              DBComm is an internal communication and operational support application used only by
              employees of our company. This application is not intended for public use, and
              access is restricted to authorized employee accounts.
            </p>
            <p>
              The app is intended for users aged 13 and above.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <UserCheck className="h-5 w-5" />
              <span>2. How we use device permissions</span>
            </h2>
            <p>
              DBComm requests only the permissions needed to run employee work features, such as
              communication, secure screen-sharing support, saving work files, and keeping required
              services running during active use.
            </p>
            <p>
              We do not use these permissions for unrelated advertising purposes. Access is granted
              only in relevant workflows and only for legitimate internal business operations.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <ShieldCheck className="h-5 w-5" />
              <span>3. Foreground service usage</span>
            </h2>
            <p>
              DBComm uses a foreground service (
              <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">
                com.foregroundservice.ForegroundService
              </code>
              ) with media projection type only to support authorized internal workflows that
              require active background operation and screen-related support.
            </p>
            <p>
              This service is not used for hidden activity. It is tied to visible work features and
              is operated under the organization&apos;s internal access controls.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <Lock className="h-5 w-5" />
              <span>4. Data handling and security</span>
            </h2>
            <p>
              We collect and process only the data necessary for business communication, operational
              support, and account authentication for employees.
            </p>
            <p>
              We apply reasonable technical and organizational safeguards to protect data against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              Access is restricted to authorized employee accounts. External users cannot create
              public accounts or use DBComm services.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <UserCheck className="h-5 w-5" />
              <span>5. Children&apos;s privacy</span>
            </h2>
            <p>
              DBComm is not intended for children under 13 years old. We do not knowingly provide
              access to users under 13.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-700">
              <Contact className="h-5 w-5" />
              <span>6. Contact information</span>
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-1">
              <li>
                Email:{' '}
                <a className="font-medium text-blue-700 underline" href="mailto:dbplusai@gmail.com">
                  dbplusai@gmail.com
                </a>
              </li>
              <li>Company Address: 40 Street 62, 01 Quarter, Cat Lai, Ward, Ho Chi Minh City, Vietnam</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
