﻿module DeanerySystem.ClientSide.Schedule.Models {
	export class LessonModel {
		public Fraction: Fractions;
		public Subject: string;
		public Lector: string;
		public Type: string;
		public PlanId: number;
		public ClassId: number;

		constructor() { }
	}
}
