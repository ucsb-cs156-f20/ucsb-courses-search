package edu.ucsb.courses.documents;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.codebox.javabeantester.JavaBeanTester;


public class InstructorTests {
    private static Logger logger = LoggerFactory.getLogger(InstructorTests.class);

    @Test
    public void testGettersAndSetters() throws Exception {
      // See: https://github.com/codebox/javabean-tester
      JavaBeanTester.test(Instructor.class);
    }

}