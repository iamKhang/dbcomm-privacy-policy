import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const permissions = [
  ['READ_EXTERNAL_STORAGE', 'Used only when an employee chooses a file that needs to be attached, shared, or reviewed for work.'],
  ['WRITE_EXTERNAL_STORAGE', 'Used only when the app needs to export or save work files that the employee explicitly requests.'],
  ['WRITE_INTERNAL_STORAGE', 'Used to securely keep temporary app data and settings required for stable app performance.'],
  ['FOREGROUND_SERVICE', 'Used to keep essential work-related processes running while the employee is actively using a feature.'],
  ['FOREGROUND_SERVICE_MEDIA_PROJECTION', 'Used only for approved internal screen-sharing or support scenarios within the company.'],
  ['FOREGROUND_SERVICE_TYPE_MEDIA_PROJECTION', 'Used to properly declare media projection service behavior as required by Android policies.'],
  ['WAKE_LOCK', 'Used only to prevent interruption during active communication, screen-sharing, or required work sessions.'],
  ['SYSTEM_ALERT_WINDOW', 'Used only for internal floating controls that support approved business operations.'],
  ['RECORD_AUDIO', 'Used only when the employee starts a feature that requires microphone input, such as communication or recording.'],
  ['RECEIVE_BOOT_COMPLETED', 'Used to restore required internal services after restart so employees can continue work reliably.'],
]

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
            <h2 className="text-xl font-semibold text-blue-700">1. About this application</h2>
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
            <h2 className="text-xl font-semibold text-blue-700">2. Permissions we request</h2>
            <p>
              DBComm only requests device permissions that are necessary for internal employee
              operations. We do not sell personal data, and we do not use permissions for
              advertising or unrelated tracking.
            </p>
            <p>
              Permissions are used in context: employees are informed through in-app workflows, and
              sensitive capabilities (such as audio capture or screen-related functionality) are
              used only for legitimate company tasks.
            </p>
            <ul className="space-y-3">
              {permissions.map(([name, reason]) => (
                <li key={name} className="rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                  <p className="font-semibold text-blue-800">android.permission.{name}</p>
                  <p className="text-sm">{reason}</p>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-blue-700">3. Foreground service usage</h2>
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
            <h2 className="text-xl font-semibold text-blue-700">4. Data handling and security</h2>
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
            <h2 className="text-xl font-semibold text-blue-700">5. Children&apos;s privacy</h2>
            <p>
              DBComm is not intended for children under 13 years old. We do not knowingly provide
              access to users under 13.
            </p>
          </section>

          <Separator />

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-blue-700">6. Contact information</h2>
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
