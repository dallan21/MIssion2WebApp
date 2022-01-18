using System;
using System.ComponentModel.DataAnnotations;

namespace Mission2WebApp.Models
{
    public class Grade_CalcModel
    {
        [Required]
        //sets the validation so that it requires a number between 0 , 100
        [Range(0,100)]
        //This creates a getter and setter for you 
        public byte assignment { get; set; }


        //Below I am writing out the getter and setter just so I know what they are and how they work

        //public void setassignment(byte input)
        //{
        //    this.assignment = input;
        //}

        //public byte getassignment ()
        //{
        //    return this.assignment;
        //}
        [Required]
        [Range(0, 100)] 
        public byte group_project { get; set; }

        [Required]
        [Range(0, 100)]
        public byte quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public byte exam { get; set; }

        [Required]
        [Range(0, 100)]
        public byte intex { get; set; }

    }
}
