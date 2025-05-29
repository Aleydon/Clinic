import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';

export const userTables = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey()
});

export const usersToClinicsTable = pgTable('users_to_clinics', {
  userId: uuid('user_id')
    .notNull()
    .references(() => userTables.id, { onDelete: 'cascade' }),
  clinicId: uuid('clinic_id')
    .notNull()
    .references(() => clinicsTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const usersToClinicsTableRelations = relations(
  usersToClinicsTable,
  ({ one }) => ({
    user: one(userTables, {
      fields: [usersToClinicsTable.userId],
      references: [userTables.id]
    }),
    clinic: one(clinicsTable, {
      fields: [usersToClinicsTable.clinicId],
      references: [clinicsTable.id]
    })
  })
);
export const userTableRelations = relations(userTables, ({ many }) => ({
  usersToClinic: many(usersToClinicsTable)
}));

export const clinicsTable = pgTable('clinics', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const clinicTableRelations = relations(clinicsTable, ({ many }) => ({
  doctors: many(doctorsTable),
  patients: many(PatientsTable),
  appointments: many(appointmentsTable),
  usersToClinicsTable: many(userTables)
}));

export const doctorsTable = pgTable('doctors', {
  id: uuid('id').defaultRandom().primaryKey(),
  clinicId: uuid('clinic_id')
    .notNull()
    .references(() => clinicsTable.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  avatarImageUrl: text('avatar_image_url'),
  // 1 - Monday, 2 - Tuesday, ..., 0 - Sunday
  availableFromWeekday: integer('available_from_weekday').notNull(),
  availableToWeekday: integer('available_to_weekday').notNull(),
  availableFromTime: time('available_from_time').notNull(),
  availableToTime: time('available_to_time').notNull(),
  specialty: text('specialty').notNull(),
  appointmentPriceInCents: integer('appointment_price_in_cents').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const doctorsTableRelations = relations(
  doctorsTable,
  ({ one, many }) => ({
    clinic: one(clinicsTable, {
      fields: [doctorsTable.clinicId],
      references: [clinicsTable.id]
    }),
    appointments: many(appointmentsTable)
  })
);

export const patientSexEnum = pgEnum('patient_sex', ['male', 'female']);

export const PatientsTable = pgTable('patients', {
  id: uuid('id').defaultRandom().primaryKey(),
  clinicId: uuid('clinic_id')
    .notNull()
    .references(() => clinicsTable.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phoneNumber: text('phone_number').notNull(),
  sex: patientSexEnum('sex').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const patientsTableRelations = relations(
  PatientsTable,
  ({ one, many }) => ({
    clinic: one(clinicsTable, {
      fields: [PatientsTable.clinicId],
      references: [clinicsTable.id]
    }),
    appointmentsTable: many(appointmentsTable)
  })
);

export const appointmentsTable = pgTable('appointments', {
  id: uuid('id').defaultRandom().primaryKey(),
  date: timestamp('date').notNull(),
  clinicId: uuid('clinic_id')
    .notNull()
    .references(() => clinicsTable.id, { onDelete: 'cascade' }),
  patientId: uuid('patient_id')
    .notNull()
    .references(() => PatientsTable.id, { onDelete: 'cascade' }),
  doctorId: uuid('doctor_id')
    .notNull()
    .references(() => doctorsTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const appointmentsTableRelations = relations(
  appointmentsTable,
  ({ one }) => ({
    clinic: one(clinicsTable, {
      fields: [appointmentsTable.clinicId],
      references: [clinicsTable.id]
    }),
    patient: one(PatientsTable, {
      fields: [appointmentsTable.patientId],
      references: [PatientsTable.id]
    }),
    doctor: one(doctorsTable, {
      fields: [appointmentsTable.doctorId],
      references: [doctorsTable.id]
    })
  })
);
