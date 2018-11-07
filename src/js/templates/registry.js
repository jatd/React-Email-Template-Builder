// Do not edit this
const RegistryHolder = {
  PatientRecall1WeeksBefore: { id: 303345, name: 'Patient Recall - 1 Weeks Before' },
  PatientRecall1WeeksAfter: { id: 303349, name: 'Patient Recall - 1 Weeks After' },
  PatientRecall1MonthsAfter: { id: 303357, name: 'Patient Recall - 1 Months After' },
  PatientRecall1MonthsBefore: { id: 303297, name: 'Patient Recall - 1 Months Before' },
  PatientRecall2MonthsAfter: { id: 303361, name: 'Patient Recall - 2 Months After' },
  PatientRecall4MonthsAfter: { id: 303365, name: 'Patient Recall - 4 Months After' },
  PatientRecall6MonthsAfter: { id: 303373, name: 'Patient Recall - 6 Months After' },
  PatientRecall8MonthsAfter: { id: 303377, name: 'Patient Recall - 8 Months After' },
  PatientRecall10MonthsAfter: { id: 303385, name: 'Patient Recall - 10 Months After' },
  PatientRecall12MonthsAfter: { id: 303389, name: 'Patient Recall - 12 Months After' },
  PatientRecall14MonthsAfter: { id: 303397, name: 'Patient Recall - 14 Months After' },
  PatientRecall16MonthsAfter: { id: 322085, name: 'Patient Recall - 16 Months After' },
  PatientRecall18MonthsAfter: { id: 303409, name: 'Patient Recall - 18 Months After' },
  PatientRecall20MonthsAfter: { id: 303413, name: 'Patient Recall - 20 Months After' },
  PatientRecall22MonthsAfter: { id: 303653, name: 'Patient Recall - 22 Months After' },
  PatientRecall24MonthsAfter: { id: 303657, name: 'Patient Recall - 24 Months After' },

  PatientReminderWeeksAwayPreconfirmed: {
    id: 323981,
    name: 'Patient Reminder - Weeks Away - Preconfirmed',
  },
  PatientReminderWeeksAwayUnconfirmed: {
    id: 323977,
    name: 'Patient Reminder - Weeks Away - Unconfirmed',
  },
  PatientReminderWeeksAwayConfirmed: {
    id: 323973,
    name: 'Patient Reminder - Weeks Away - Confirmed',
  },
  PatientReminderWeekAwayPreconfirmed: {
    id: 323969,
    name: 'Patient Reminder - Week Away - Preconfirmed',
  },
  PatientReminderWeekAwayUnconfirmed: {
    id: 323965,
    name: 'Patient Reminder - Week Away - Unconfirmed',
  },
  PatientReminderWeekAwayConfirmed: {
    id: 323961,
    name: 'Patient Reminder - Week Away - Confirmed',
  },
  PatientReminderSameWeekPreconfirmed: {
    id: 323957,
    name: 'Patient Reminder - Same Week - Preconfirmed',
  },
  PatientReminderSameWeekUnconfirmed: {
    id: 323953,
    name: 'Patient Reminder - Same Week - Unconfirmed',
  },
  PatientReminderSameWeekConfirmed: {
    id: 323949,
    name: 'Patient Reminder - Same Week - Confirmed',
  },
  PatientReminderSameDayPreconfirmed: {
    id: 323945,
    name: 'Patient Reminder - Same Day - Preconfirmed',
  },
  PatientReminderSameDayUnconfirmed: {
    id: 323941,
    name: 'Patient Reminder - Same Day - Unconfirmed',
  },
  PatientReminderSameDayConfirmed: { id: 323937, name: 'Patient Reminder - Same Day - Confirmed' },

  PatientAppointmentConfirmed: { id: 304485, name: 'Patient Appointment - Confirmed' },
  PatientAppointmentCancelled: { id: 304481, name: 'Patient Appointment - Cancelled' },
  PatientAppointmentRequested: { id: 304477, name: 'Patient Appointment - Requested' },

  PatientReview: { id: 304517, name: 'Patient Review' },

  PatientEmailConfirmation: { id: 304525, name: 'Patient Email Confirmation' },
  PatientPasswordReset: { id: 304521, name: 'Patient Password Reset' },

  UserPasswordReset: { id: 304553, name: 'User Password Reset' },
  UserAppointmentRequested: { id: 324873, name: 'User Appointment Requested' },

  OnlineBookingEmailBlast: { id: 335293, name: 'Online Booking Introduction' },
  IntroAnnouncementGeneral: { id: 343025, name: 'General Introduction Announcement' },
};

const testTemplates = {
  PlaceHolderForTemplateName: { id: 322729, name: 'General Test Template' },
};

// Registry of Mailchimp IDs to Templates
// Place what you want to get updated in here or to update all just put in ...RegistryHolder
const TemplatesRegistry = {
  PlaceHolderForTemplateName: { id: 322729, name: 'General Test Template' },
};

export default TemplatesRegistry;

/* Recalls
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 322085             │ Patient Recall - 16 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303657             │ Patient Recall - 24 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303653             │ Patient Recall - 22 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303413             │ Patient Recall - 20 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303409             │ Patient Recall - 18 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303405             │ Patient Recall - 24 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303397             │ Patient Recall - 14 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303389             │ Patient Recall - 12 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303385             │ Patient Recall - 10 Months After                           │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303377             │ Patient Recall - 8 Months After                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303373             │ Patient Recall - 6 Months After                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303365             │ Patient Recall - 4 Months After                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303361             │ Patient Recall - 2 Months After                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303357             │ Patient Recall - 1 Months After                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303349             │ Patient Recall - 1 Week After                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303345             │ Patient Recall - 1 Week Before                             │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 303297             │ Patient Recall - 1 Months Before                           │
└────────────────────┴────────────────────────────────────────────────────────────┘*/

/* Reminders
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323981             │ Patient Reminder - Weeks Away - Preconfirmed               │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323977             │ Patient Reminder - Weeks Away - Unconfirmed                │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323973             │ Patient Reminder - Weeks Away - Confirmed                  │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323969             │ Patient Reminder - Week Away - Preconfirmed                │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323965             │ Patient Reminder - Week Away - Unconfirmed                 │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323961             │ Patient Reminder - Week Away - Confirmed                   │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323957             │ Patient Reminder - Same Week - Preconfirmed                │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323953             │ Patient Reminder - Same Week - Unconfirmed                 │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323949             │ Patient Reminder - Same Week - Confirmed                   │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323945             │ Patient Reminder - Same Day - Preconfirmed                 │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323941             │ Patient Reminder - Same Day - Unconfirmed                  │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 323937             │ Patient Reminder - Same Day - Confirmed                    │
 */

/* Appointments
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304485             │ Patient Appointment - Confirmed                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304481             │ Patient Appointment - Cancelled                            │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304477             │ Patient Appointment - Requested                            │
└────────────────────┴────────────────────────────────────────────────────────────┘
 */

/* Reviews
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 322729             │ General Test Template                                        │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304517             │ Patient Review                                             │
└────────────────────┴────────────────────────────────────────────────────────────┘
 */

/* Misc
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304525             │ Patient Email Confirmation                                 │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304521             │ Patient Password Reset                                     │
└────────────────────┴────────────────────────────────────────────────────────────┘
 */

/* User
┌────────────────────┬────────────────────────────────────────────────────────────┐
│ Template ID        │ Template Name                                              │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 324873             │ User Appointment Requested                                 │
├────────────────────┼────────────────────────────────────────────────────────────┤
│ 304553             │ User Password Reset                                        │
└────────────────────┴────────────────────────────────────────────────────────────┘
 */
