import PatientRecall1WeeksBefore from "./PatientRecall1WeeksBefore";
import PatientRecall1WeeksAfter from "./PatientRecall1WeeksAfter";
import PatientRecall1MonthsBefore from "./PatientRecall1MonthsBefore";
import PatientRecall1MonthsAfter from "./PatientRecall1MonthsAfter";
import PatientRecall2MonthsAfter from "./PatientRecall2MonthsAfter";
import PatientRecall4MonthsAfter from "./PatientRecall4MonthsAfter";
import PatientRecall6MonthsAfter from "./PatientRecall6MonthsAfter";
import PatientRecall8MonthsAfter from "./PatientRecall8MonthsAfter";
import PatientRecall10MonthsAfter from "./PatientRecall10MonthsAfter";
import PatientRecall12MonthsAfter from "./PatientRecall12MonthsAfter";
import PatientRecall14MonthsAfter from "./PatientRecall14MonthsAfter";
import PatientRecall16MonthsAfter from "./PatientRecall16MonthsAfter";
import PatientRecall18MonthsAfter from "./PatientRecall18MonthsAfter";
import PatientRecall20MonthsAfter from "./PatientRecall20MonthsAfter";
import PatientRecall22MonthsAfter from "./PatientRecall22MonthsAfter";
import PatientRecall24MonthsAfter from "./PatientRecall24MonthsAfter";

import PatientReminderWeeksAwayConfirmed from "./PatientReminderWeeksAwayConfirmed";
import PatientReminderWeeksAwayUnconfirmed from "./PatientReminderWeeksAwayUnconfirmed";
import PatientReminderWeeksAwayPreconfirmed from "./PatientReminderWeeksAwayPreconfirmed";
import PatientReminderWeekAwayConfirmed from "./PatientReminderWeekAwayConfirmed";
import PatientReminderWeekAwayUnconfirmed from "./PatientReminderWeekAwayUnconfirmed";
import PatientReminderWeekAwayPreconfirmed from "./PatientReminderWeekAwayPreconfirmed";
import PatientReminderSameWeekConfirmed from "./PatientReminderSameDayConfirmed";
import PatientReminderSameWeekUnconfirmed from "./PatientReminderSameDayUnconfirmed";
import PatientReminderSameWeekPreconfirmed from "./PatientReminderSameDayPreconfirmed";
import PatientReminderSameDayConfirmed from "./PatientReminderSameWeekConfirmed";
import PatientReminderSameDayUnconfirmed from "./PatientReminderSameWeekUnconfirmed";
import PatientReminderSameDayPreconfirmed from "./PatientReminderSameWeekPreconfirmed";

import PatientAppointmentRequested from "./PatientAppointmentRequested";
import PatientAppointmentCancelled from "./PatientAppointmentCancelled";
import PatientAppointmentConfirmed from "./PatientAppointmentConfirmed";

import PatientEmailConfirmation from "./PatientEmailConfirmation";
import PatientPasswordReset from "./PatientPasswordReset";

import PatientReview from "./PatientReview";

import UserPasswordReset from "./UserPasswordReset";
import UserAppointmentRequested from "./UserAppointmentRequested";

import IntroAnnouncementGeneral from "./IntroAnnouncmentGeneral";
import * as hardcodedTemplates from "./hardcodedTemplates";
import * as reminderTemplates from "./reminderTemplates";
import * as reviewTemplates from "./reviewTemplates";

export const directories = {
  "Hard Coded Templates": hardcodedTemplates,
  "Patient Reminder Templates": reminderTemplates,
  "Patient Review Templates": reviewTemplates
};

export const templateList = {
  PatientAppointmentRequested,
  PatientAppointmentCancelled,
  PatientAppointmentConfirmed,
  PatientEmailConfirmation,
  PatientPasswordReset,
  PatientRecall1MonthsBefore,
  PatientRecall1WeeksBefore,
  PatientRecall1WeeksAfter,
  PatientRecall1MonthsAfter,
  PatientRecall2MonthsAfter,
  PatientRecall4MonthsAfter,
  PatientRecall6MonthsAfter,
  PatientRecall8MonthsAfter,
  PatientRecall10MonthsAfter,
  PatientRecall12MonthsAfter,
  PatientRecall14MonthsAfter,
  PatientRecall16MonthsAfter,
  PatientRecall18MonthsAfter,
  PatientRecall20MonthsAfter,
  PatientRecall22MonthsAfter,
  PatientRecall24MonthsAfter,
  PatientReview,
  PatientReminderWeeksAwayPreconfirmed,
  PatientReminderWeeksAwayUnconfirmed,
  PatientReminderWeeksAwayConfirmed,
  PatientReminderWeekAwayPreconfirmed,
  PatientReminderWeekAwayUnconfirmed,
  PatientReminderWeekAwayConfirmed,
  PatientReminderSameWeekPreconfirmed,
  PatientReminderSameWeekUnconfirmed,
  PatientReminderSameWeekConfirmed,
  PatientReminderSameDayPreconfirmed,
  PatientReminderSameDayUnconfirmed,
  PatientReminderSameDayConfirmed,
  UserPasswordReset,
  UserAppointmentRequested,
  IntroAnnouncementGeneral
};
