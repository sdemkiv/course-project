﻿using System.Collections.Generic;
using DeanerySystem.DataAccess.Abstract;
using DeanerySystem.DataAccess.Entities;

namespace DeanerySystem.DataAccess.DataFeeders
{
    public class DepartmentDataFeeder : DataAccess.DataFeeders.AbstractDataFeeder<Department>
    {
        public DepartmentDataFeeder(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            var stream = this.unitOfWork.StreamRepository.GetById(1);
            this.data = new List<Department>
            {
                new Department()
                {
                    Id = 1,
                    Name = "Програмування",
                    Number = 1,
                    Stream = stream
                },
                new Department()
                {
                    Id = 2,
                    Name = "Інформаційних систем",
                    Number = 2,
                    Stream = stream
                },
                new Department()
                {
                    Id = 3,
                    Name = "Дискретного аналізу та інтелектуальних систем",
                    Number = 3,
                    Stream = stream
                }
            };

            this.Data.ForEach(d=>stream.Departments.Add(d));
        }
    }
}
