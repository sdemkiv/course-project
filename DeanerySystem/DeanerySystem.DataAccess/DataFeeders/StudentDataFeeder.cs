﻿using System;
using System.Collections.Generic;
using DeanerySystem.DataAccess.Abstract;
using DeanerySystem.DataAccess.Entities;
using DeanerySystem.DataAccess.Entities.Enums;
using DeanerySystem.DataAccess.Entities.Identity;
using DeanerySystem.DataAccess.Identity;
using Microsoft.AspNet.Identity;

namespace DeanerySystem.DataAccess.DataFeeders
{
    public class StudentDataFeeder: AbstractDataFeeder<Student>
    {
        public StudentDataFeeder(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            this.data = new List<Student>
            {
                new Student
                {
                    FirstName = "Соломія",
                    LastName = "Демків",
                    MiddleName = "Тарасівна",
                    LatinFirstName = "Solomiia",
                    LatinLastName = "Demkiv",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Андрій",
                    LastName = "Глова",
                    MiddleName = "Романович",
                    LatinFirstName = "Andriy",
                    LatinLastName = "Hlova",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Соломія",
                    LastName = "Гнідець",
                    MiddleName = "Святославівна",
                    LatinFirstName = "Solomiia",
                    LatinLastName = "Hnidets",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Олег",
                    LastName = "Занік",
                    MiddleName = "Павлович",
                    LatinFirstName = "Oleh",
                    LatinLastName = "Zanik",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Олексій",
                    LastName = "Кондратюк",
                    MiddleName = "Анатолійович",
                    LatinFirstName = "Oleksiy",
                    LatinLastName = "Kndratiuk",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Михайло",
                    LastName = "Копилець",
                    MiddleName = "Миколайович",
                    LatinFirstName = "Mykhailo",
                    LatinLastName = "Kopylets",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Христина",
                    LastName = "Михайлюк",
                    MiddleName = "Володимирівна",
                    LatinFirstName = "Khrystyna",
                    LatinLastName = "Mykhailyuk",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Олеся",
                    LastName = "Мідяна",
                    MiddleName = "Іванівна",
                    LatinFirstName = "Olesya",
                    LatinLastName = "Midyana",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Микола",
                    LastName = "Молочій",
                    MiddleName = "Вікторович",
                    LatinFirstName = "Mykola",
                    LatinLastName = "Molochiy",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Ігор",
                    LastName = "Романчук",
                    MiddleName = "Володимирович",
                    LatinFirstName = "Ihor",
                    LatinLastName = "Romanchuk",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Тарас",
                    LastName = "Романчук",
                    MiddleName = "Григорович",
                    LatinFirstName = "Taras",
                    LatinLastName = "Romanchuk",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Богдан",
                    LastName = "Смачило",
                    MiddleName = "Васильович",
                    LatinFirstName = "Bohdan",
                    LatinLastName = "Smachylo",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Маркіян",
                    LastName = "Фостяк",
                    MiddleName = "Романович",
                    LatinFirstName = "Markiyan",
                    LatinLastName = "Fostyak",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Софія",
                    LastName = "Хомин",
                    MiddleName = "Андріївна",
                    LatinFirstName = "Sofiya",
                    LatinLastName = "Khomyn",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Данило",
                    LastName = "Юристовський",
                    MiddleName = "Орестович",
                    LatinFirstName = "Danylo",
                    LatinLastName = "Yurystovskiy",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                },
                new Student
                {
                    FirstName = "Вікторія",
                    LastName = "Юріяк",
                    MiddleName = "Віталіївна",
                    LatinFirstName = "Viktoria",
                    LatinLastName = "Yuriyak",
                    TuitionFee = TuitionFees.Scholar,
                    Group = this.unitOfWork.GroupRepository.GetById(1)
                }
            };

            this.Data.ForEach(s =>
            {
                s.UserName =
                    $"{s.LatinFirstName.ToLower()}.{s.LatinLastName.ToLower()}@edeanery.com";
                s.Email = $"{s.LatinFirstName.ToLower()}.{s.LatinLastName.ToLower()}@edeanery.com";
                s.EmailConfirmed = true;
                if (this.unitOfWork.Context != null)
                {
                    var manager = new IdentityUtilityManager(this.unitOfWork);
                    manager.CreateAccount(s, Roles.Student);
                }
                s.Group.Students.Add(s);
            });
        }
    }
}
